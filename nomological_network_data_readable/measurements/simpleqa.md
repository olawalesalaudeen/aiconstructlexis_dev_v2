# SimpleQA
**Type:** Measurement  
**Referenced in:** 10 papers  

## State of the Field

**What it is.** Across these papers, SimpleQA is most commonly described as a factuality benchmark introduced by OpenAI, built from numerous concise, fact-oriented or fact-seeking questions in general knowledge areas. One definition frames it as assessing the factual capabilities of LLMs, while another describes it as evaluating the ability to answer fact-seeking questions and notes that responses are categorized as correct, incorrect, or not attempted.

**What it is claimed to measure.** Papers link SimpleQA to three constructs and one behavioral indicator. The prevailing measurement claim is factuality-related: one paper says it was proposed to measure short-form factuality in LLMs, another uses it for factual question answering, and another takes it for truthfulness; a separate paper also uses it to measure out-of-distribution generalization. Overall, the reported uses spread across several targets, though most framings stay within factuality-oriented evaluation.

**Space of uses.** Papers use it alongside other benchmarks, but they do not describe SimpleQA as linked to another measurement instrument. Some studies pair it with FreshQA-2025-04-28 as one of two factuality benchmarks for fact-seeking questions, while another evaluates on GAIA, focusing on GAIA-web, and also on SimpleQA, where a web agent is used to explore the answers.

## Sources

**[Chinese SafetyQA: A Safety Short-form Factuality Benchmark for Large Language Models](https://aclanthology.org/2025.acl-long.732.pdf)**
> A benchmark introduced by OpenAI comprising numerous concise, fact-oriented questions to assess the factual capabilities of LLMs in general knowledge areas.

## Relationships

### → SimpleQA
- **Factuality** (constructs) — *measured_by*
  > Recently, SimpleQA (Wei et al., 2024) has been proposed to measure the short-form factuality in LLMs (Section 2).
  - [Chinese SimpleQA: A Chinese Factuality Evaluation for Large Language Models](https://aclanthology.org/2025.acl-long.941.pdf)
- **Truthfulness** (constructs) — *measured_by*
  > We take SimpleQA (Wei et al., 2024b) for truthfulness... (Section 3.1)
  - [STAIR: Improving Safety Alignment with Introspective Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cx/zhang25cx.pdf)
- **Factual question answering** (behaviors tasks) — *measured_by*
  > Factuality: SimpleQA (Wei et al., 2024) and FreshQA-2025-04-28 (Vu et al., 2023), two factuality benchmarks that evaluate the ability of language models to answer fact-seeking questions. (Section 3.2)
  - [Thinking Out Loud: Do Reasoning Models Know When They're Right?](https://aclanthology.org/2025.emnlp-main.73.pdf)
