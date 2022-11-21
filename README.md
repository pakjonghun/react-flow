## 리엑트 플로우 사용 연습

### 주의사항
- react-flow 스타일링
  - css 파일이 모듈에 있어서 postcss 는 다 깨진다(여기서 postCSS 사용한듯, 초기세팅도 다 깨짐)
  - inline 스타일링이 가장 best 고, styled-component 를 사용 할 수 밖에 없다.
- nodeType 이 커스텀의 핵심 인듯 하다. 단, React.memo 꼭써야 한다.
  - react.memo 안쓰면 무한랜더링 된다.
  - useMemo 쓸필요까지는 없고 컴포넌트 밖에서 nodeType 을 선언 할당 하면된다.(doc 대로)
  
