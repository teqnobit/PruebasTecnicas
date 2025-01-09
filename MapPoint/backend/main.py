from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import random
from datetime import datetime

app = FastAPI()

### CORS
origin = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/getPoint")
def getPoint():
    lat = random.randrange(-9000000, 9000000, 1) / 100000
    long = random.randrange(-18000000, 18000000, 1) / 100000
    timenow = datetime.now().strftime("%d %b %y")
    # print(lat, long, timenow)   ### 15.05675 69.79971 08 Jan 25
    return {
        "lat": lat,
        "long": long,
        "tiempo": timenow
    }
