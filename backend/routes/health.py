from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def root():
    return {"status": "ok", "message": "GlobalJobMatch AI is running 🌐"}

@router.get("/health")
def health():
    return {"status": "healthy"}
