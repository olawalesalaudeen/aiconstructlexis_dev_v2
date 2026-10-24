# Rationale compression
**Type:** Behavior  
**Referenced in:** 2 papers  
**Also known as:** Thought compression, Compressed chain-of-thought generation  

## State of the Field

The observable behavior of a model shortening or summarizing a generated rationale or chain of thought, aiming to preserve its core logical steps while reducing length.

## Sources

**[LightThinker: Thinking Step-by-Step Compression](https://aclanthology.org/2025.emnlp-main.673.pdf) (as "Thought compression")**
> The observable act of replacing a verbose reasoning segment with a compact representation (e.g., gist tokens), discarding the original chain while continuing inference.

**[TokenSkip: Controllable Chain-of-Thought Compression in LLMs](https://aclanthology.org/2025.emnlp-main.165.pdf) (as "Compressed chain-of-thought generation")**
> The observable behavior of generating a condensed chain-of-thought by selectively omitting tokens deemed less semantically important, thereby reducing the total output length.
