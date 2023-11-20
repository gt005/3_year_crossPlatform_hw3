from time import sleep

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from credentials import LoginCredentials


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/user_login")
def user_login(credentials: LoginCredentials):
    sleep(1)
    if credentials.username != 'Карим':
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Такого пользователя не существует'
        )

    if credentials.password != '12345':
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Неправильный пароль'
        )

    return {
        'access': 'wliuehiwolejhBUIHhvewjdhwie982BJHVKlwe',
        'refresh': 'IUjbklmokOhv2300199-92873'
    }
