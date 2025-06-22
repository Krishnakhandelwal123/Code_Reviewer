import aiService from '../services/ai.service.js';

async function getReview(req, res) {
    const code = req.body.code;


    if (!code) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

   const response = await aiService(code);
   res.send(response);
}

export { getReview };
