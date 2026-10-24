# Self-consistency
**Type:** Measurement  
**Referenced in:** 48 papers  
**Also known as:** Self-Consistency  

## State of the Field

Across the provided literature, 'Self-consistency' is predominantly characterized as an inference or evaluation procedure, while a smaller set of studies treat it as a property of model reasoning or outputs. The prevailing procedural definition involves sampling multiple diverse reasoning paths for a given prompt and then selecting the most frequent final answer through a majority vote. This approach, often used with Chain-of-thought reasoning, is based on the premise that "correct reasoning is more likely to converge on a single answer" (Token-Supervised Value Models for Enhancing Mathematical Problem-Solving Capabilities of Large Language Models). It is frequently studied alongside other inference techniques like Best-of-N and Self-Refine to enhance accuracy. In contrast, some papers define self-consistency as a property of logical coherence. This alternative framing refers to the degree to which a model's beliefs do not contradict each other, the alignment between an answer and its rationale, or the maintenance of correctness "throughout the entire reasoning process" (Step-by-Step Reasoning for Math Problems  via Twisted Sequential Monte Carlo). In this context, it is studied in relation to Faithfulness and Hallucination and is reported to be measured by instruments like CC-SHAP. The concept is applied to tasks ranging from mathematical problem-solving on benchmarks like GSM8k to long-form text generation.

## Sources

**[Token-Supervised Value Models for Enhancing Mathematical Problem-Solving Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0801fccb1d705a9e6747e138d9a0056a-Paper-Conference.pdf)**
> An inference procedure where multiple reasoning paths are sampled and the most frequent final answer is selected, leveraging the idea that correct reasoning is more likely to converge on a single answer.

**[DeLLMa: Decision Making Under Uncertainty with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6cd3ac24cdb789beeaa9f7145670fcae-Paper-Conference.pdf) (as "Self-Consistency")**
> A prompting-based evaluation procedure that samples multiple responses and uses majority vote for decision-making tasks.

## Relationships

### → Self-consistency
- **Mathematical reasoning** (constructs) — *measured_by*
  > “We apply self-consistency over diverse reasoning paths (Wang et al., 2023), selecting the most frequent answer in the candidate set, and report results on the SVAMP ... and StrategyQA ... datasets.”
  - [Reranking Laws for Language Generation: A Communication-Theoretic Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/c8b2f897e45770595656a79a9ad91e89-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > “We apply self-consistency over diverse reasoning paths (Wang et al., 2023), selecting the most frequent answer in the candidate set, and report results on the SVAMP ... and StrategyQA ... datasets.”
  - [Reranking Laws for Language Generation: A Communication-Theoretic Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/c8b2f897e45770595656a79a9ad91e89-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > In 'Self-Consistency' ... we use the same prompt but generate 15 responses ... then select the final answer based on majority voting.
  - [ReGenesis: LLMs can Grow into Reasoning Generalists via Self-Improvement](https://proceedings.iclr.cc/paper_files/paper/2025/file/9c77f2ce42151b2c2e26d2cf47f99564-Paper-Conference.pdf)

### Associated with
- **Majority voting** (measurements)
  > self-consistency [53], which runs majority voting on multiple responses from the first turn as a baseline to compare to our sequential strategy. (Section 5)
  - [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://proceedings.neurips.cc/paper_files/paper/2024/file/639d992f819c2b40387d4d5170b8ffd7-Paper-Conference.pdf)
- **Trustworthiness** (constructs)
  > Failure to preserve self-consistency reveals a lack of understanding of the shared semantics underlying natural language and programming language, and therefore undermines the trustworthiness of a model. (ABSTRACT)
  - [Beyond Accuracy: Evaluating Self-Consistency of Code Large Language Models with IdentityChain](https://proceedings.iclr.cc/paper_files/paper/2024/file/16371a9d5fed65d6d78ca3a7fa6e598c-Paper-Conference.pdf)
- **Multi-agent debate** (behaviors tasks)
  > for self-consistency with an equivalent number of responses, multi-agent debate signiﬁcantly underperforms simple self-consistency using majority voting. (Section 4)
  - [Large Language Models Cannot Self-Correct Reasoning Yet](https://proceedings.iclr.cc/paper_files/paper/2024/file/8b4add8b0aa8749d80a34ca5d941c355-Paper-Conference.pdf)
- **GSM8K** (measurements)
  > “In the mathematical reasoning task (GSM8K), we also consider self-consistency (Wang et al., 2022).”
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > This naturally leads us to ask: how can we further unlock the potential of self-consistency and repeated sampling in open-ended generation tasks? (Section 1)
  - [Integrative Decoding: Improving Factuality via Implicit Self-consistency](https://proceedings.iclr.cc/paper_files/paper/2025/file/adaf1463442f5986fe81dc6c719a13a1-Paper-Conference.pdf)
- **Explanation generation** (behaviors tasks)
  > “we evaluate the self-consistency of VLM decoders in both post-hoc and CoT explanation settings”
  - [Do Vision & Language Decoders use Images and Text equally? How Self-consistent are their Explanations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks)
  > self-consistency: first samples a diverse set of reasoning paths instead of only taking the greedy one, and then selects the most consistent answer by majority voting (Wang et al., 2022). (Section 6)
  - [LLM The Genius Paradox: A Linguistic and Math Expert's Struggle with Simple Word-based Counting Problems](https://aclanthology.org/2025.naacl-long.172.pdf)
- **Prompt robustness** (constructs)
  > Language models lack robustness to prompt variations (Huang et al., 2024; Elazar et al., 2021) and give contradictory responses in such cases, motivating the need for enhanced self-consistency. (Section 2)
  - [Waste Not, Want Not; Recycled Gumbel Noise Improves Consistency in Natural Language Generation](https://aclanthology.org/2025.naacl-long.292.pdf)
- **Reliability** (constructs)
  > we aggregate the answer of generated response paths in a way that reflects the reliability of each generated content (as opposed to self-consistency in which each generated chain contributes equally to majority voting).
  - [CER: Confidence Enhanced Reasoning in LLMs](https://aclanthology.org/2025.acl-long.390.pdf)
- **Confidence** (constructs)
  > Intuitively, the consistency of an answer is a reflection of the model confidence... (Section 6)
  - [Self-Consistency Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/prasad25a/prasad25a.pdf)
- **Faithfulness** (constructs)
  > The consistency of LLM outputs is intertwined with the broader discourse on faithfulness in reasoning — specifically, whether a model’s generated explanation or stated decision process accurately reflects its true internal mechanisms (Agarwal et al., 2024). (Section 2.2)
  - [Robust Native Language Identification through Agentic Decomposition](https://aclanthology.org/2025.emnlp-main.423.pdf)
- **Logical consistency** (constructs)
  > This implies that evaluating the logical consistency of NLI models should be based on the labels assigned by the model itself, disregarding the actual correctness of the labels in the real world. (Section 1)
  - [Transitive self-consistency evaluation of NLI models without gold labels](https://aclanthology.org/2025.emnlp-main.1152.pdf)
- **CC-SHAP** (measurements)
  > CC-SHAP (Parcalabescu & Frank, 2024) is an edit-free measure of self-consistency at input and output level. (Section 2)
  - [Do Vision & Language Decoders use Images and Text equally? How Self-consistent are their Explanations?](https://proceedings.iclr.cc/paper_files/paper/2025/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf)
