# Disambiguation ability
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** Ambiguity resolution, Word sense understanding, Disambiguation, Disambiguation capability, Sensitivity to sense boundaries, Ambiguity understanding  

## State of the Field

**Definition agreement:** Complementary. Most papers define disambiguation ability as a model's capacity to use context to choose among multiple plausible meanings or interpretations of language, often for words, terms, queries, or translations. A few papers narrow this to specific cases such as superlatives, same-sense judgments, entity-name ambiguity, or visually grounded vague instructions, so they emphasize different facets and settings of the same context-based interpretation phenomenon rather than incompatible constructs.

**Space of definitions.** Across the surveyed work, the prevailing usage treats disambiguation ability as a model's context-sensitive capacity to distinguish among multiple possible meanings or interpretations and respond or translate accordingly. Most definitions instantiate this shared framing in different settings: ambiguous questions with multiple valid readings, words in context, ambiguous terms in translation, entities that share a surface name, superlatives with absolute versus relative readings, and vague or colloquial instructions, sometimes by integrating visual context or common sense. A smaller framing defines it more specifically as sensitivity to same-sense versus different-sense boundaries in a way that mirrors human judgments.

**Space of facets.** Papers most often systematize the construct by the type of ambiguity being resolved. Some distinguish among alternative readings or meanings, such as multiple valid question interpretations, absolute versus relative superlative readings, or same-sense versus different-sense contexts, while others narrow it to lexical translation, entity disambiguation, or instruction understanding. One survey organizes disambiguation work into three major policies, query rewriting, long-form question answering, and asking clarifying questions.

**Space of measurement.** Operationalization is spread across 6 linked measurement instruments and 3 linked behavioral indicators. The linked instruments include BIG-Bench Hard, CondAmbigQA, DMDTEval, LLM-as-a-judge, and Multi30k, plus 1 other instrument; these span benchmarks or datasets, a systematic evaluation framework, and prompt-based judging. Measures make the construct concrete in several ways: CondAmbigQA evaluates whether models recognize, interpret, and resolve ambiguity, using answer count and penalties for overgeneration, undergeneration, and returning only one answer pair; DMDTEval uses ambiguous-vocabulary disambiguation accuracy and an LLM-as-a-judge prompt; other papers test word sense disambiguation, most-likely translation under multimodal context, and ambiguity resolution tasks in general benchmarks.

**Links.** Papers link the construct to 2 other constructs and 3 behavioral indicators. One paper claims a causal relationship from reasoning to disambiguation ability, stating that reasoning and reflection are needed to correctly understand ambiguous instructions, and another claims a causal relationship from domain knowledge to disambiguation ability, arguing that scarcity of cross-domain knowledge leads to translation ambiguities. A survey relates disambiguation ability to query rewriting, long-form question answering, and clarifying question generation as three policies for disambiguation work, and papers do not report correlational links.

## Sources

**[CondAmbigQA: A Benchmark and Dataset for Conditional Ambiguous Question Answering](https://aclanthology.org/2025.emnlp-main.115.pdf) (as "Ambiguity resolution")**
> The model's capacity to recognize multiple valid interpretations of a query and generate responses that appropriately distinguish or address them based on contextual constraints.

**[Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf) (as "Word sense understanding")**
> The latent ability of a model to grasp the meaning of a word in context, beyond mere pattern matching, enabling accurate disambiguation and explanation across diverse usages.

**[Detect, Disambiguate, and Translate: On-Demand Visual Reasoning for Multimodal Machine Translation with Large Vision-Language Models](https://aclanthology.org/2025.naacl-long.74.pdf) (as "Disambiguation capability")**
> The underlying trait enabling a model to resolve ambiguous terms by leveraging multimodal context, particularly visual evidence, to select the correct translation.

**[Evaluating Contextualized Representations of (Spanish) Ambiguous Words: A New Lexical Resource and Empirical Analysis](https://aclanthology.org/2025.naacl-long.422.pdf) (as "Sensitivity to sense boundaries")**
> The extent to which a model distinguishes categorical same-sense versus different-sense contexts in a way that mirrors human judgments.

**[CORG: Generating Answers from Complex, Interrelated Contexts](https://aclanthology.org/2025.naacl-long.428.pdf) (as "Disambiguation")**
> The latent ability of a model to accurately distinguish between entities that share the same surface name but have different specific descriptors.

**[DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf)**
> The latent capacity of an LLM to correctly interpret and translate words with multiple meanings based on domain-specific context in multi-domain translation.

**[Visual-O1: Understanding Ambiguous Instructions via Multi-modal Multi-turn Chain-of-thoughts Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3769fddee1b20552d2490c4ff18b136-Paper-Conference.pdf) (as "Ambiguity understanding")**
> The ability of a model to correctly interpret language instructions that are vague, incomplete, or contain colloquialisms by integrating visual context and common sense.

## Relationships

### Disambiguation ability →
- **BIG-Bench Hard** (measurements) — *measured_by*
  > “These benchmarks are quite diverse and include tasks such as logical deduction, arithmetic, translation error detection, disambiguation, as well as general knowledge”
  - [Fractal Patterns May Illuminate the Success of Next-Token Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd004fa45fc1fe5c0218b7801d98d036-Paper-Conference.pdf)
- **Multi30k** (measurements) — *measured_by*
  > This makes it an ideal dataset to demonstrate the effectiveness of our DeDiT reasoning’s on-demand disambiguation capabilities. (Section 3.1)
  - [Detect, Disambiguate, and Translate: On-Demand Visual Reasoning for Multimodal Machine Translation with Large Vision-Language Models](https://aclanthology.org/2025.naacl-long.74.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Winogrande: a large-scale dataset focused on common sense reasoning, designed to improve and evaluate AI models on ambiguity resolution tasks (Sakaguchi et al., 2019) (Section 5.1).
  - [What Limits Bidirectional Model’s Generative Capabilities? A Uni-Bi-Directional Mixture-of-Expert Method For Bidirectional Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25y/li25y.pdf)
- **DMDTEval** (measurements) — *measured_by*
  > To this end, we present an evaluation and analysis of LLMs on disambiguation in multi-domain translation (DMDTEval), our systematic evaluation framework... (Abstract)
  - [DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Therefore, we design a prompt to evaluate the disambiguation capability of LLMs using GPT-4o-mini7. (Section 2.4)
  - [DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf)
- **CondAmbigQA** (measurements) — *measured_by*
  > CondAmbigQA emphasises ambiguity resolution, explicitly capturing possible clarifications for ambiguous questions. This allows for a structured evaluation of how effectively models recognise, interpret, and resolve ambiguity by interpreting distinct possible meanings. (Section 3.4)
  - [CondAmbigQA: A Benchmark and Dataset for Conditional Ambiguous Question Answering](https://aclanthology.org/2025.emnlp-main.115.pdf)

### → Disambiguation ability
- **Reasoning** (constructs) — *causes*
  > Reasoning and reflection are crucial for the model to correctly understand ambiguous instructions. (Table 5)
  - [Visual-O1: Understanding Ambiguous Instructions via Multi-modal Multi-turn Chain-of-thoughts Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3769fddee1b20552d2490c4ff18b136-Paper-Conference.pdf)
- **Domain knowledge** (constructs) — *causes*
  > This scarcity limits their translation capabilities and prevents them from effectively acquiring cross-domain knowledge, which leads to translation ambiguities. (Section 1)
  - [DMDTEval: An Evaluation and Analysis of LLMs on Disambiguation in Multi-domain Translation](https://aclanthology.org/2025.emnlp-main.309.pdf)

### Associated with
- **Query rewriting** (behaviors tasks)
  > we argue existing disambiguation works fall in three major policies... Query Rewriting, Middle. Long Form Answer Generation, Right. Asking Clarifying Questions. (Section 3, Figure 2)
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
- **Long-form question answering** (behaviors tasks)
  > we argue existing disambiguation works fall in three major policies... Query Rewriting, Middle. Long Form Answer Generation, Right. Asking Clarifying Questions. (Section 3, Figure 2)
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
- **Clarifying question generation** (behaviors tasks)
  > we argue existing disambiguation works fall in three major policies... Query Rewriting, Middle. Long Form Answer Generation, Right. Asking Clarifying Questions. (Section 3, Figure 2)
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
