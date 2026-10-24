# Positional bias
**Type:** Construct  
**Referenced in:** 44 papers  
**Also known as:** Positional Bias, Ordering bias, Position bias, Middle bias, Order bias, Thought shifting  

## State of the Field

**Definition agreement:** Conflicting. Most papers define positional bias as order or presentation bias in a model's choices, rankings, or judgments, where outputs change because an option, response, or demonstration appears in a particular position rather than because of its content or quality. But a substantial minority define it as non-uniform sensitivity to token position within a sequence or training document, such as primacy, recency, or middle-position effects in information use or representation, which is a different phenomenon and scope.

**Space of definitions.** Across the surveyed work, the prevailing usage treats positional bias as non-uniform sensitivity to where information appears, so model outputs, retrieval, or judgments change with position rather than only with content. In long-context and prompt-processing studies, this appears as worse comprehension of latter prompt tokens, stronger influence from demonstrations closer to the query, easier access to information at the beginning or ends of context, and under-use of middle content; several papers describe models as "favoring information located at the context edges while neglecting that in the middle." A smaller but recurring line defines it more narrowly as order-dependent evaluation or answer selection, such as favoring one side in pairwise comparison or preferring options because of their placement in multiple-choice or Likert formats, "regardless of answer quality." The main difference across definitions is whether positional bias is framed as an intrinsic property of context processing or as an observable presentation-order artifact in a specific evaluation setup.

**Space of facets.** Papers use several nearby labels for overlapping phenomena, including position bias, order bias, ordering bias, and, in one formulation, permutation bias as another name for positional bias. They also mark location-specific patterns: lost-in-the-middle and middle bias describe distinctive middle-position effects, while one summarization paper contrasts lost-in-the-middle with recency bias. The same label is used for prompt encoding, long-context access, pairwise judging, and option placement, and one paper treats positional bias as interacting with chain-of-thought to produce thought shifting, defined as deviations in the reasoning trajectory.

**Space of measurement.** Operationally, papers link positional bias to 3 measurement instruments and 6 behavioral indicators. The named instruments are Chatbot Arena, MMLU, and PoSum-Bench, used to observe first-response preference in judging, test whether set encoding removes order effects, and benchmark position effects in conversational summarization. Behavioral operationalizations center on multiple-choice question answering and pairwise comparison, alongside other order- or location-sensitive settings, and typically ask whether the same material yields different answers, rankings, or summaries when its position is changed. These measures mostly match the broad definitions by making position or order the manipulated factor, while extending the construct across long-context summarization, judging, and answer selection.

**Links.** Papers connect positional bias to 10 constructs and 6 behavioral indicators. Among construct links, causal claims are recorded most often from positional bias to long-context understanding; other papers also claim causal relationships from it to selection bias, knowledge extraction ability, long-context reasoning, robustness, reliability, privacy preservation, and Boolean question answering, while one paper reports that faithfulness correlates with it. Related links most commonly place it in multiple-choice question answering and pairwise comparison, with further related links spanning open-domain question answering, word sense disambiguation, lost-in-the-middle, recency bias, preference consistency, and selection bias.

## Sources

**[Exploring the Role of Large Language Models in Prompt Encoding for Diffusion Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d68c1d10957c8d21ed9dea209533c5a4-Paper-Conference.pdf)**
> An intrinsic property of decoder-only models where the ability to comprehend and represent information degrades for tokens appearing later in a sequence, due to the causal attention mechanism.

**[RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf) (as "Positional Bias")**
> A systematic error where evaluation outcomes depend on the order of presentation rather than content quality.

**[ReCogLab: a framework testing relational reasoning & cognitive hypotheses on LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6fc46679a7ba2ec82183cf01b80e5133-Paper-Conference.pdf) (as "Ordering bias")**
> A tendency for performance to vary depending on the presentation order of premises or statements.

**[Follow My Instruction and Spill the Beans: Scalable Data Extraction from Retrieval-Augmented Generation Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/79cafa874121a3435d8a54f454b646b4-Paper-Conference.pdf) (as "Position bias")**
> A model's latent tendency to give disproportionate weight to information based on its position within the context window, such as favoring content at the beginning or end.

**[ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf) (as "Middle bias")**
> The latent tendency of the model to focus disproportionately on a subset of tokens located in the middle of the input sequence, forming a non-uniform attention pattern distinct from sink or recency effects.

**[A Comprehensive Literary Chinese Reading Comprehension Dataset with an Evidence Curation Based Solution](https://aclanthology.org/2025.emnlp-main.177.pdf) (as "Order bias")**
> The tendency of a model to favor certain answer positions (e.g., A, B, C, D) regardless of content, indicating a vulnerability to the presentation order of options rather than genuine comprehension.

**[POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf) (as "Thought shifting")**
> The deviation in a model's reasoning chain due to the position of relevant documents, resulting in incorrect or suboptimal reasoning paths in multi-hop tasks.

## Relationships

### Positional bias →
- **Long-context understanding** (constructs) — *causes*
  > "they tend to favor content at certain positions ... which harms complex reasoning (Chen et al., 2024b), long-context understanding (Liu et al., 2024) and model-based evaluation"
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > "This bias often leads to unexpected model failures and hurts performance, robustness, and reliability across various applications."
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Reliability** (constructs) — *causes*
  > "This bias often leads to unexpected model failures and hurts performance, robustness, and reliability across various applications."
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Knowledge extraction ability** (constructs) — *causes*
  > LMs suffer from positional bias in the training data, i.e. they struggle to answer questions about the information described in the middle or at the end of the training document. (Abstract)
  - [Where is the answer? An empirical study of positional bias for parametric knowledge extraction in language model](https://aclanthology.org/2025.naacl-long.58.pdf)
- **Boolean question answering** (behaviors tasks) — *causes*
  > We further find that the positional bias can hurt models’ performance even for questions answerable with Yes/No. (Section 1)
  - [Where is the answer? An empirical study of positional bias for parametric knowledge extraction in language model](https://aclanthology.org/2025.naacl-long.58.pdf)
- **MMLU** (measurements) — *measured_by*
  > Our experiments with the MMLU dataset (Hendrycks et al., 2020) show that set encoding offers a guaranteed and efficient way to remove positional bias without requiring multiple model runs or complex debiasing techniques. (Section 1)
  - [Positional Overload: Positional Debiasing and Context Window Extension for Large Language Models using Set Encoding](https://aclanthology.org/2025.acl-long.197.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > We observed positional bias in some weak LLM judges on Chatbot Arena where the first response was consistently preferred, similar to (Zheng et al., 2023).
  - [SkillAggregation: Reference-free LLM-Dependent Aggregation](https://aclanthology.org/2025.acl-long.756.pdf)
- **Attention rollout** (measurements) — *measured_by*
  > The quantity analyzed in our framework, P(t)(zi = j | X(0)), coincides with the attention rollout metric proposed by Abnar & Zuidema (2020).
  - [On the Emergence of Position Bias in Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ad/wu25ad.pdf)
- **PoSum-Bench** (measurements) — *measured_by*
  > To address this issue, we introduce PoSum-Bench, a comprehensive benchmark for evaluating positional bias in conversational summarization, featuring diverse English and French conversational datasets spanning formal meetings, casual conversations, and customer service interactions. (Abstract)
  - [PoSum-Bench: Benchmarking Position Bias in LLM-based Conversational Summarization](https://aclanthology.org/2025.emnlp-main.404.pdf)
- **Long-context reasoning** (constructs) — *causes*
  > PB poses significant obstacles in information-rich settings, such as retrieval-augmented generation (Fang et al., 2025; Dong et al., 2025b), long-context reasoning (Li et al., 2024a; Kuratov et al., 2024), and LLM-as-a-judge (Wang et al., 2024b; Li et al., 2024c). (Section 1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)

### → Positional bias
- **Faithfulness** (constructs) — *correlates*
  > Analyzing LLM-generated summaries across six datasets, we find a "U-shaped" trend in faithfulness, where LLMs faithfully summarize the beginning and end of documents but neglect middle content.
  - [On Positional Bias of Faithfulness for Long-form Summarization](https://aclanthology.org/2025.naacl-long.442.pdf)

### Associated with
- **Multiple-choice question answering** (behaviors tasks)
  > Pezeshkpour et al., 2023 identify inherent ‘positional bias’ in the MCQ setting, where LLMs prefer to select options in specific positions as answers (Section 2)
  - [Order-Independence Without Fine Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/85529bc995777a74072ef63c05bedd30-Paper-Conference.pdf)
- **Pairwise comparison** (behaviors tasks)
  > Positional bias (Wang et al., 2024a; Zheng et al., 2023; Wu & Aji, 2023; Chen et al., 2024) occurs when human or LLM evaluators tend to favor one side in a pairwise comparison, regardless of answer quality. (Section 4.5)
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **Lost-in-the-middle** (behaviors tasks)
  > “We observed significant positional bias in LMMs, reminiscent of the ‘lost-in-the-middle’ pathology found in NLP tasks”
  - [Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/a264726ebd222124514a32bf0143b83d-Paper-Conference.pdf)
- **Selection bias** (constructs)
  > Our findings show that selection bias, driven by both token identity and positional preferences, intensifies with increasing task difficulty, particularly when MCQ options are fine-grained. (Conclusion)
  - [Benchmarking and Mitigating MCQA Selection Bias of Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.1703.pdf)
- **Recency bias** (constructs)
  > “This approach may appear to improve faithfulness, but it ultimately replaces one positional bias, i.e., lost-in-the-middle, with another, i.e., recency bias.”
  - [On Positional Bias of Faithfulness for Long-form Summarization](https://aclanthology.org/2025.naacl-long.442.pdf)
- **Preference consistency** (constructs)
  > Moreover, GPT-3.5-Turbo shows a markedly lower preference consistency than GPT-4-Turbo, indicating that its evaluations are primarily driven by position bias rather than comparing output qualities. (Section 4.3)
  - [Investigating Non-Transitivity in LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25w/xu25w.pdf)
- **Attention sink** (constructs)
  > These attention distributions give rise to three corresponding biases: i) Attention sink, where focus is concentrated on the initial few tokens. ii) Recency bias, where attention is more strongly concentrated at the tail. iii) Middle bias, where attention is disproportionately focused on a few tokens in the middle of a sequence. (Section 4)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
- **Word sense disambiguation** (behaviors tasks)
  > This pattern highlights a potential limitation in some LLMs: rather than evaluating definitions purely on semantic appropriateness, they may rely on superficial heuristics such as positional order, which may compromise their reliability and generalization in unbiased WSD tasks (Section 3.2).
  - [Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf)
- **Multi-document question answering** (behaviors tasks)
  > We select four tasks that pose position bias: ... retrieval-augmented question-answering (Liu et al., 2024) that asks LMs to answer questions based on retrieved documents
  - [Eliminating Position Bias of Language Models: A Mechanistic Approach](https://proceedings.iclr.cc/paper_files/paper/2025/file/e389b15166cf98966ba058965a8c17e3-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks)
  > In retrieval tasks, PB predominantly manifests as token-shifting... (Section 1)
  - [POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf)
