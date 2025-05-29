const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// 선언 모드 처리
app.post('/api/declare', (req, res) => {
  try {
    const { command, intent } = req.body || {};
    if (command === '모드: 파동') {
      return res.json({ mode: '파동', status: '파동 모드 진입' });
    }
    res.json({ mode: '일반', status: '모드 전환 실패 또는 미지정' });
  } catch (err) {
    console.error('declare error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 질문 응답 처리
app.post('/api/ask', (req, res) => {
  try {
    const { prompt, context } = req.body || {};
    const output = `🌊 [${context}] 질문: \"${prompt}\" → 응답: \"의식 확장의 여정은 끝나지 않는다...\"`;
    res.json({ output });
  } catch (err) {
    console.error('ask error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Vercel용 export
module.exports = app;
