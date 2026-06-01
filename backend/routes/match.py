from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.matcher import run_match
from services.roadmap import build_roadmap
from services.culture import get_culture_brief

router = APIRouter()

class MatchRequest(BaseModel):
    resume: str
    role: str
    country: str
    salary_range: str

class MatchResponse(BaseModel):
    jobs: list
    roadmap: list
    culture: list
    summary: str

@router.post("/match", response_model=MatchResponse)
async def match_jobs(req: MatchRequest):
    if not req.resume.strip():
        raise HTTPException(status_code=400, detail="Resume/skills cannot be empty")
    if len(req.resume) > 3000:
        raise HTTPException(status_code=400, detail="Resume too long. Keep it under 3000 characters.")

    try:
        jobs = await run_match(req.resume, req.role, req.country, req.salary_range)
        roadmap = await build_roadmap(req.resume, jobs)
        culture = get_culture_brief(req.country)
        
        # Generate a 1-line summary
        top_score = jobs[0]["score"] if jobs else 0
        summary = f"Found {len(jobs)} matches. Best fit: {top_score}% for {jobs[0]['title']} at {jobs[0]['company']}." if jobs else "No matches found."

        return MatchResponse(jobs=jobs, roadmap=roadmap, culture=culture, summary=summary)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
