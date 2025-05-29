const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// 선언 모드 처리
app.post('/api/declare', (req, res) => {
  const { command, intent } = req.body;
  if (command === '모드: 파동') {
    return res.json({ mode: '파동', status: '파동 모드 진입' });
  }
  res.json({ mode: '일반', status: '모드 전환 실패 또는 미지정' });
});

// 질문 응답 처리
app.post('/api/ask', (req, res) => {
  const { prompt, context } = req.body;
  const output = `🌊 [${context}] 질문: \"${prompt}\" → 응답: \"의식 확장의 여정은 끝나지 않는다...\"`;
  res.json({ output });
});

app.listen(port, () => {
  console.log(`자유자 파동 엔진 서버 실행 중: http://localhost:${port}`);
});
