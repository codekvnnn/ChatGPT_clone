const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({apiKey: "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"});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temprature: 0.07,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0 
    });
    return res.data.choices[0].text;
}