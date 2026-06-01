CULTURE_DATA = {
    "South Korea": {
        "country": "South Korea 🇰🇷",
        "flag": "🇰🇷",
        "tips": [
            "Use formal titles (님/씨) until invited to use first names",
            "Hierarchy is critical — always greet the most senior person first",
            "Punctuality is non-negotiable; arrive 5–10 min early",
            "Business cards are exchanged with both hands — treat them with respect",
            "Long working hours are expected; avoid leaving before your manager",
            "Group harmony (눈치) matters — avoid strong public disagreements",
            "Email subject lines should be formal and specific",
        ],
        "email_example": "Dear Mr. Kim, I hope this message finds you well. I am writing to express my strong interest in the Software Engineer position at Kakao Corp...",
        "interview_tips": "Research the company extensively. Show long-term commitment. Speak about team contributions, not just individual achievements.",
        "salary_norm": "Salaries quoted annually in KRW. Negotiation is less common for new grads."
    },
    "United States": {
        "country": "United States 🇺🇸",
        "flag": "🇺🇸",
        "tips": [
            "First-name basis is standard from day one",
            "Direct, results-oriented communication is valued",
            "Volunteer ideas and initiatives — silence is interpreted as disengagement",
            "Work-life balance is openly discussed; set boundaries clearly",
            "Emails are concise — get to the point in the first sentence",
            "Show measurable impact: use numbers, percentages, outcomes",
            "Networking and LinkedIn presence matter significantly",
        ],
        "email_example": "Hi Sarah, I wanted to follow up on my application for the Software Engineer role. I've attached my GitHub portfolio — happy to chat at your convenience.",
        "interview_tips": "Use STAR format (Situation, Task, Action, Result). Show passion for the role. Ask thoughtful questions at the end.",
        "salary_norm": "Salaries quoted annually in USD. Negotiation is expected — research market rates on Levels.fyi or Glassdoor."
    }
}

def get_culture_brief(country: str) -> list:
    result = []
    
    if "Korea" in country:
        result.append(CULTURE_DATA["South Korea"])
    if "United States" in country or "US" in country:
        result.append(CULTURE_DATA["United States"])
    if "Both" in country:
        result = [CULTURE_DATA["South Korea"], CULTURE_DATA["United States"]]
    if "Remote" in country or "Global" in country:
        result = [CULTURE_DATA["United States"]]  # default to US norms for remote
    
    if not result:
        result = [CULTURE_DATA["United States"]]
    
    return result
