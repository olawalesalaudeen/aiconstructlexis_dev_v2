# Greedy decoding
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

Across the provided literature, greedy decoding is consistently defined as a deterministic method for text generation that operates by selecting the single token with the highest predicted probability at each step. This approach is operationalized by setting the temperature to 0, which, as one paper notes, makes the response deterministic and produces a single fixed output for a given input. While most commonly framed as a 'decoding method', it is also characterized as a 'generation behavior' and described as an 'extreme case' of truncation where all but the most likely token are kept. The quality of its outputs is a point of divergence in the sources; it is sometimes associated with 'low-quality generations' and is reported to be outperformed by other techniques like WOC decoding. However, other work finds that under specific finetuning conditions, 'greedy decoding is a close contender and actually outperforms beam search'.

## Sources

**[Probing LLM World Models: Enhancing Guesstimation with Wisdom of Crowds Decoding](https://aclanthology.org/2025.emnlp-main.234.pdf)**
> A deterministic decoding method that selects the highest-probability token at each step, producing a single fixed output for a given input.
