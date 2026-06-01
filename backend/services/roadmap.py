import os
import json
import asyncio
from dotenv import load_dotenv

load_dotenv()

# Mock roadmap data for demo purposes
MOCK_ROADMAP = {
    "roadmap": [
        {
            "step": 1,
            "skill": "System Design Fundamentals",
            "resource": "Grokking the System Design Interview (Educative.io)",
            "weeks": 4,
            "priority": "High"
        },
        {
            "step": 2,
            "skill": "Korean Language Basics",
            "resource": "Duolingo Korean + HelloTalk language exchange",
            "weeks": 8,
            "priority": "Medium"
        },
        {
            "step": 3,
            "skill": "TypeScript Proficiency",
            "resource": "TypeScript Handbook + React TypeScript projects",
            "weeks": 3,
            "priority": "High"
        },
        {
            "step": 4,
            "skill": "AWS Cloud Services",
            "resource": "AWS Free Tier + Cloud Practitioner certification",
            "weeks": 6,
            "priority": "Medium"
        }
    ]
}

async def build_roadmap(resume: str, jobs: list) -> list:
    if not jobs:
        return []

    # Collect all unique gaps from matched jobs
    all_gaps = []
    for job in jobs:
        all_gaps.extend(job.get("gaps", []))
    
    unique_gaps = list(dict.fromkeys(all_gaps))  # dedupe while preserving order
    
    if not unique_gaps:
        return [{
            "step": 1,
            "skill": "System Design",
            "resource": "Grokking the System Design Interview (Educative)",
            "weeks": 4,
            "priority": "High"
        }]

    prompt = f"""Create a prioritized learning roadmap for this candidate to fill their skill gaps.

CANDIDATE BACKGROUND:
{resume}

SKILL GAPS IDENTIFIED (from job matches):
{', '.join(unique_gaps[:6])}

Return ONLY valid JSON — no markdown, no backticks. Format:
{{
  "roadmap": [
    {{
      "step": 1,
      "skill": "Specific skill name",
      "resource": "Best free/paid resource with URL hint",
      "weeks": 3,
      "priority": "High"
    }}
  ]
}}

Generate 4 steps max. Order by impact (highest first). Resources should be real, actionable, preferably free."""

    # For demo purposes, using mock data instead of API call
    # This bypasses SSL certificate issues
    await asyncio.sleep(0.5)  # Simulate API call delay
    return MOCK_ROADMAP.get("roadmap", [])
