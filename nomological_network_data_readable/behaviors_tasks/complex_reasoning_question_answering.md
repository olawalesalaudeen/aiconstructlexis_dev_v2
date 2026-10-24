# Complex reasoning question answering
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Reasoning question answering, Complex question answering, Complex reasoning, Multi-step problem solving, Complex reasoning task performance, Complex Reasoning  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as answering questions that go beyond simple recognition or a single memorized fact, and instead require multi-step inference, synthesis of multiple pieces of information, comparisons, or detailed analysis. Many definitions frame it as multi-hop or multi-faceted question answering, sometimes with explicit intermediate steps, while some multimodal papers narrow it to deep understanding of charts, images, or visual scenes, including cases where fMRI data provides the scene context. Success is usually operationalized as answer correctness or benchmark performance, though some papers emphasize full, elaborate answers rather than simple responses, and others use multiple-choice or short-answer formats.

**Variants.** Papers use nearby labels such as reasoning question answering, complex question answering, complex reasoning, multi-step problem solving, and complex reasoning task performance. The settings vary widely: multimodal benchmarks separate complex reasoning from conversation or description, chart work focuses on synthesizing information across visual elements, open-domain systems target multi-document or multi-hop queries, and other work studies knowledge-graph QA, long-context document QA, social media evidence selection and justification, domain-specific queries, and multi-step mathematical or commonsense problems.

**Space of elicitation and scores.** Papers measure this behavior with 9 linked instruments. The most commonly linked are GSM8K, LLaVA-Bench-in-the-Wild, BIG-Bench Hard, MATH, and CharXiv, and 4 other instruments are also linked. Taken together, these instruments cover mathematical step-by-step problem solving, multimodal image question answering with a complex reasoning category, general complex reasoning evaluation, and chart-based reasoning, with some papers also using multi-hop or broad-domain QA benchmarks.

**What it is taken as evidence of.** Construct links are mixed rather than centered on a single agreed target. Papers connect this behavior to 6 constructs: most commonly Mathematical reasoning, reported as related, with additional related links to Long-context understanding and Planning; other papers claim causal relationships from Analogical reasoning and Multi-step planning to this behavior, and 1 other construct is also linked by a causal claim. Papers therefore do not present a single shared view of which construct this behavior reflects.

## Sources

**[Neuro-Vision to Language: Enhancing Brain Recording-based Visual Reconstruction and Language Interaction](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1c62bdeee97b38c34dcda152c829511-Paper-Conference.pdf)**
> The task of answering questions that require inference and deep understanding of a visual scene, based on fMRI data as context.

**[CharXiv: Charting Gaps in Realistic Chart Understanding in Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdf6f8e9fd9aeaf79b6024caec24f15b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Reasoning question answering")**
> The task of answering questions that require complex cognitive operations, such as synthesizing information across different parts of a chart, making comparisons, or performing fine-grained analysis.

**[Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf) (as "Complex question answering")**
> The task of answering questions that require more than simple object recognition, often involving reasoning or synthesis of multiple pieces of information.

**[Neuron-based Multifractal Analysis of Neuron Interaction Dynamics in Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6158e152498f8d8b83d14388a7ec1963-Paper-Conference.pdf) (as "Complex reasoning")**
> The ability to perform sophisticated logical and inferential thinking to solve complex problems.

**[Process Reward Model with Q-value Rankings](https://proceedings.iclr.cc/paper_files/paper/2025/file/26494b66ae1114d314673e25b4967288-Paper-Conference.pdf) (as "Multi-step problem solving")**
> The observable behavior of generating a sequence of intermediate steps to arrive at a solution for a complex problem.

**[Personality Alignment of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/25203d1cc8c58381eab578f4fcf9c4f8-Paper-Conference.pdf) (as "Complex reasoning task performance")**
> The observable behavior of solving structured problems that require multi-step logical, mathematical, or commonsense reasoning, as measured by performance on specific benchmarks.

**[DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf) (as "Complex Reasoning")**
> The task of solving questions that require multi-step logical inference or detailed analysis.

## Relationships

### Complex reasoning question answering →
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > LLaVA-Bench serves as a general benchmark for systematic comprehension, encompassing three categories: conversation, detailed description, and complex questions. (Section 4.2)
  - [Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > Furthermore, G2IS demonstrates significant improvements on complex reasoning tasks like GSM8K and BBH, showcasing the advantages of using a gradient-based graph structure to jointly model instruction tuning data, leading to better performance on complex tasks. (Section 4.2)
  - [Beyond Similarity: A Gradient-based Graph Method for Instruction Tuning Data Selection](https://aclanthology.org/2025.acl-long.1189.pdf)
- **CharXiv** (measurements) — *measured_by*
  > CharXiv includes two types of questions: ... 2) reasoning questions that require synthesizing information across complex visual elements
  - [CharXiv: Charting Gaps in Realistic Chart Understanding in Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdf6f8e9fd9aeaf79b6024caec24f15b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMLU** (measurements) — *measured_by*
  > MMLU (Hendrycks et al., 2020) complex question answering dataset of multiple choice questions spanning many domains and is used to test LM question-answering across a wide range of subjects. (Section 3)
  - [Forking Paths in Neural Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b6a8ca3d06ffa2e044bff8c723863ff-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > HotpotQA (Yang et al., 2018) is a complex question answering dataset of multi-hop reasoning questions which cannot be answered by a single memorized fact, but instead require chaining facts together. (Section 3)
  - [Forking Paths in Neural Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b6a8ca3d06ffa2e044bff8c723863ff-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > Additionally, we evaluate generative performance on complex reasoning tasks, such as GSM8K (Cobbe et al., 2021) with 5-shot prompting and MMLU-Pro Engineering/Law (Wang et al., 2024a) with zero-shot chain-of-thought.
  - [Lexico: Extreme KV Cache Compression via Sparse Coding over Universal Dictionaries](https://raw.githubusercontent.com/mlresearch/v267/main/assets/kim25ae/kim25ae.pdf)

### → Complex reasoning question answering
- **Tool use** (behaviors tasks) — *causes*
  > These tools enable agents to perform complex tasks like multi-step problem-solving and retrieving diverse information, which is essential for complex retrieval and question-answering (QA) (Section 1).
  - [AvaTaR: Optimizing LLM Agents for Tool Usage via Contrastive Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2db8ce969b000fe0b3fb172490c33ce8-Paper-Conference.pdf)

### Associated with
- **Long-context understanding** (constructs)
  > Large language models (LLMs) have advanced to support long-context tasks such as document understanding (Li et al., 2024a), multi-turn dialogues (Yi et al., 2024), repository-level code completion (Jimenez et al., 2024), and complex reasoning (Zhou et al., 2025).
  - [LeanK: Learnable K Cache Channel Pruning for Efficient Decoding](https://aclanthology.org/2025.emnlp-main.1584.pdf)
