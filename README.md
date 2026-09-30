# order-service

사내 주문 서비스. Git 실습용 가상 프로젝트라서 코드는 실행하지 않는다.

## 브랜치

- `dev` — 운영. 여기에 올라간 것이 배포된다.
- `predev` — 개발 서버. 테스트는 여기서 한다.
- `feature/*` — 각자 PC에서만 쓰는 작업 브랜치. 원격에 올리지 않는다.

## 작업 순서

1. `dev`에서 `feature/이름`을 만든다.
2. 작업하고 커밋한다.
3. `predev`에 merge하고 push한다. 개발 서버에서 테스트한다.
4. 테스트를 통과하면 같은 feature를 `dev`에 merge하고 push한다.

`predev`를 `dev`나 feature에 merge하지 않는다.

## 커밋 메시지

`feat: `, `fix: `, `docs: `, `chore: ` 중 하나로 시작한다.
