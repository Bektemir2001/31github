from anthropic import Anthropic, HUMAN_PROMPT, AI_PROMPT

anthropic = Anthropic(api_key="")
stream = anthropic.completions.create(
    model="claude-2",
    max_tokens_to_sample=300,
    prompt=f"{HUMAN_PROMPT} Салам. Эмне кылып жатасың?{AI_PROMPT}",
    stream=True
)
for completion in stream:
    print(completion.completion, end="", flush=True)