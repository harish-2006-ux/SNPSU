import os
import json
import asyncio
from dotenv import load_dotenv

load_dotenv()

# Mock response for demo purposes - bypassing API calls due to SSL issues
MOCK_RESPONSE = {
    "matches": [
        {
            "job_id": 1,
            "score": 92,
            "why": "Strong match with Python, React, and REST API experience for Korean tech company",
            "gaps": ["Korean language basics", "System design patterns"],
            "strengths": ["Python programming", "React development", "REST APIs"]
        },
        {
            "job_id": 4,
            "score": 88,
            "why": "Excellent fit for US-based role with Python and distributed systems focus",
            "gaps": ["Go programming", "High-scale infrastructure"],
            "strengths": ["Python expertise", "Problem-solving skills", "CS fundamentals"]
        },
        {
            "job_id": 3,
            "score": 85,
            "why": "Good match for full-stack position with React and Node.js requirements",
            "gaps": ["TypeScript", "AWS cloud services"],
            "strengths": ["React development", "Full-stack experience", "Portfolio projects"]
        }
    ]
}

# Simulated job listings database
# In production: replace with real API calls (Remotive, Adzuna, LinkedIn)
MOCK_JOBS = [
    {"id": 1, "title": "Software Engineer", "company": "Kakao Corp", "country": "South Korea 🇰🇷", "salary": "₩55M–₩80M", "jd": "Python, React, REST APIs, PostgreSQL, Docker. 1–3 years exp. Team-player, fast learner preferred."},
    {"id": 2, "title": "Backend Developer", "company": "Naver Labs", "country": "South Korea 🇰🇷", "salary": "₩60M–₩90M", "jd": "Java or Python, microservices, Kubernetes, CI/CD. Strong DSA skills. Open-source contribution a plus."},
    {"id": 3, "title": "Full Stack Engineer", "company": "Krafton", "country": "South Korea 🇰🇷", "salary": "₩65M–₩95M", "jd": "React, Node.js, AWS, TypeScript. Portfolio projects required. Agile team environment."},
    {"id": 4, "title": "Software Engineer", "company": "Stripe", "country": "United States 🇺🇸", "salary": "$110K–$145K", "jd": "Python or Go, distributed systems, REST APIs, high-scale infra. Strong problem-solving. CS fundamentals required."},
    {"id": 5, "title": "ML Engineer", "company": "Hugging Face", "country": "United States 🇺🇸 (Remote)", "salary": "$100K–$140K", "jd": "Python, PyTorch, transformer models, HuggingFace ecosystem. Research background a plus."},
    {"id": 6, "title": "Frontend Engineer", "company": "Linear", "country": "United States 🇺🇸 (Remote)", "salary": "$95K–$130K", "jd": "React, TypeScript, CSS, strong UI/UX sensibility. Side projects or open-source work valued."},
    {"id": 7, "title": "Data Engineer", "company": "Coupang", "country": "South Korea 🇰🇷", "salary": "₩70M–₩100M", "jd": "Python, Spark, Airflow, data pipelines, SQL. Experience with large-scale data systems."},
    {"id": 8, "title": "DevOps Engineer", "company": "Grab (Seoul office)", "country": "South Korea 🇰🇷", "salary": "₩65M–₩90M", "jd": "Kubernetes, Terraform, AWS/GCP, CI/CD pipelines. Automation mindset required."},
]

async def run_match(resume: str, role: str, country: str, salary_range: str) -> list:
    # Filter jobs by country preference
    if "Both" in country or "Global" in country:
        candidates = MOCK_JOBS
    elif "Korea" in country:
        candidates = [j for j in MOCK_JOBS if "Korea" in j["country"]]
    elif "United States" in country or "US" in country:
        candidates = [j for j in MOCK_JOBS if "United States" in j["country"]]
    else:
        candidates = MOCK_JOBS

    # Build scoring prompt
    jobs_text = "\n".join([
        f"JOB {j['id']}: {j['title']} at {j['company']} ({j['country']}) — JD: {j['jd']}"
        for j in candidates
    ])

    prompt = f"""You are an expert international recruiter. Score and rank these jobs for the candidate.

CANDIDATE PROFILE:
{resume}

PREFERRED ROLE: {role}
TARGET: {country}
SALARY EXPECTATION: {salary_range}

JOB LISTINGS:
{jobs_text}

Return ONLY valid JSON — no markdown, no backticks. Format:
{{
  "matches": [
    {{
      "job_id": 1,
      "score": 85,
      "why": "One sentence explaining why this is a good fit",
      "gaps": ["specific missing skill 1", "specific missing skill 2"],
      "strengths": ["matched skill 1", "matched skill 2"]
    }}
  ]
}}

Score 0-100 based on skill match, role alignment, and realistic fit. Only include top 3 jobs. Be specific about gaps."""

    # For demo purposes, using mock data instead of API call
    # This bypasses SSL certificate issues
    await asyncio.sleep(1)  # Simulate API call delay
    result = MOCK_RESPONSE

    # Merge AI scores with job metadata
    job_map = {j["id"]: j for j in candidates}
    scored_jobs = []
    for m in result.get("matches", []):
        jid = m["job_id"]
        if jid in job_map:
            j = job_map[jid]
            scored_jobs.append({
                "title": j["title"],
                "company": j["company"],
                "country": j["country"],
                "salary": j["salary"],
                "score": m["score"],
                "why": m["why"],
                "gaps": m.get("gaps", []),
                "strengths": m.get("strengths", [])
            })

    return sorted(scored_jobs, key=lambda x: x["score"], reverse=True)
