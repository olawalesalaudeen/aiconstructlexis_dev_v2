# Reasoning depth
**Type:** Construct  
**Referenced in:** 5 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Available definitions split across two framings rather than converging on one. One paper describes reasoning depth as the extent to which a model can engage with complex, multi-step reasoning problems that go beyond surface-level understanding or pattern matching, and ties it to high-difficulty, reasoning-focused evaluation and progress toward expert-level reasoning. Another paper uses a narrower framing centered on handling long causal dependencies and maintaining plausibility as the number of reasoning steps, or the length of a causal chain, increases.

**Space of facets.** Papers provide only limited internal structure. The clearest distinction is between reasoning depth and reasoning breadth, with one paper treating them as separate places where LLMs struggle. Within the depth framing, the recurring facets are multi-step reasoning, longer causal chains, long causal dependencies, and whether plausibility diminishes as depth increases.

**Space of measurement.** In the reported work, papers link reasoning depth to 2 measurement instruments, Human evaluation and MMLU-Pro, and to no behavioral indicators. MMLU-Pro is used as a benchmark with highly complex reasoning questions and more distractor options to better evaluate reasoning depth and robustness, while Human evaluation scores reasoning depth on a 1-5 Likert scale alongside character consistency, plausibility, and engagement. The benchmark operationalizes depth through difficult reasoning items, whereas the human evaluation treats it as a directly rated criterion.

**Links.** Among the reported relationships, papers only state that reasoning depth is measured by MMLU-Pro and by Human evaluation. No causal, correlational, or other construct-to-construct links are reported.

## Sources

**[MMLU-ProX: A Multilingual Benchmark for Advanced Large Language Model Evaluation](https://aclanthology.org/2025.emnlp-main.79.pdf)**
> The extent to which a model can engage with complex, multi-step reasoning problems that require more than surface-level understanding or pattern matching.

## Relationships

### Reasoning depth →
- **MMLU-Pro** (measurements) — *measured_by*
  > MMLU-Pro (Wang et al., 2024b) extends the original MMLU benchmark by introducing highly complex reasoning questions and more distractor options to better evaluate LLMs’ reasoning depth and robustness in English. (Section 2)
  - [MMLU-ProX: A Multilingual Benchmark for Advanced Large Language Model Evaluation](https://aclanthology.org/2025.emnlp-main.79.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > The evaluation used a 1–5 Likert scale across four criteria: Character Consistency, Plausibility, Engagement, and Reasoning Depth. (Section 4.5)
  - [R-CHAR: A Metacognition-Driven Framework for Role-Playing in Large Language Models](https://aclanthology.org/2025.emnlp-main.1372.pdf)
