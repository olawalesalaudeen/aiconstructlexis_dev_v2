# Relevance
**Type:** Construct  
**Referenced in:** 35 papers  
**Also known as:** Relation, Topic relevance  

## State of the Field

**Definition agreement:** Consensus. Most papers define relevance as the extent to which a response, document, summary, argument, or other contribution directly addresses the given prompt, question, topic, or task and avoids off-topic content. A few papers add setting-specific emphasis on covering key points or serving user needs, but these are minor extensions of the same core idea rather than a substantial alternative definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats relevance as on-topic alignment: generated responses, summaries, arguments, questions, or other outputs should directly address the prompt, question, instruction, topic, or user query and avoid off-topic material. Some papers phrase this as a latent ability or tendency of a model or text to stay on topic, while others treat it as a property of an output, document, reasoning path, or passage. Smaller strands broaden the construct beyond simple pertinence, defining it as capturing the main points of a news article, aligning web content with its topic while offering "valuable extensions beyond", balancing topic coverage and off-topic avoidance in code review, or contributing to a shared task goal under the alternate name "Relation".

**Space of facets.** Rather than giving a common internal taxonomy, papers usually position relevance inside broader multidimensional schemes. It appears as one of the three fundamental dimensions of instruction-following, is discussed together with consistency and coherence in summarization and retrieval settings, is treated as a pragmatic condition within coherence assessment, and in debating is labeled "Topic relevance". A smaller line of work also renames or restructures it: one survey uses "Relation" for task-relevant contributions in human-model cooperation, and one code-review metric defines relevance as "Rel = 2 · Con · Comp / (Con + Comp)".

**Space of measurement.** Operationally, papers link relevance to 4 measurement instruments and 2 behavioral indicators, namely information retrieval and question answering. The most common instrument is LLM-as-a-judge, where GPT-4 or GPT-4O rates responses or long-form answers for relevance, sometimes on a 1 to 10 scale; human evaluation is also common, with users, annotators, or participants scoring surveys, news summaries, responses, or research ideas. G-Eval is used as an LLM-based metric for summary relevance, and expert evaluation appears in RAG evaluation. These measures mostly mirror the dominant definition by asking whether content directly addresses the question or topic, though some papers operationalize relevance with setting-specific scores such as the probability of generating a question from a document, a relevance score for a reasoning path, or the code-review score "Rel = 2 · Con · Comp / (Con + Comp)".

**Links.** Outside measurement, one paper claims a causal relationship from relevance to information retrieval, stating that explicitly modeling relevance and consistency trains a retriever to retrieve the documents needed for answering a question. Papers also report that question answering is related to relevance, that instruction following ability is related to relevance, and that consistency is related to relevance. These related links are stated in broader evaluation frameworks: question-answering systems can have "attributes of relevance", relevance is a dimension of instruction-following, and consistency is discussed jointly with relevance after irrelevant documents are filtered out. No correlation claim is recorded.

## Sources

**[Achieving Human Parity in Content-Grounded Datasets Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)**
> The degree to which a model's generated response is pertinent and on-topic with respect to the user's prompt or question.

**[How to Enable Effective Cooperation Between Humans and NLP Models: A Survey of Principles, Formalizations, and Beyond](https://aclanthology.org/2025.acl-long.22.pdf) (as "Relation")**
> The latent tendency of a model to produce contributions that are relevant to the shared task goal during human-model interaction.

**[InspireDebate: Multi-Dimensional Subjective-Objective Evaluation-Guided Reasoning and Optimization for Debating](https://aclanthology.org/2025.acl-long.1335.pdf) (as "Topic relevance")**
> The degree to which the model's arguments directly address and align with the core debate topic, avoiding digression or irrelevance.

## Relationships

### Relevance →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We prompt GPT-4 to rate responses from various decoding strategies on relevance, accuracy, and insightfulness, scoring them from 1 to 10. (Table 2)
  - [Transfer Q-star : Principled Decoding for LLM Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/b8700a8a005032fe869c741b0a75274b-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Users are asked to rate the relevance, structure, and usefulness to their actual work of the generated survey on a scale from 1 (poor) to 5 (excellent).
  - [AutoSurvey: Large Language Models Can Automatically Write Surveys](https://proceedings.neurips.cc/paper_files/paper/2024/file/d07a9fc7da2e2ec0574c38d5f504d105-Paper-Conference.pdf)
- **G-Eval** (measurements) — *measured_by*
  > For Event Summarization, we adopt G-Eval (Liu et al., 2023b), an LLM-based metric that evaluates the relevance, consistency, and coherence of generated summaries against reference labels. (Section 4.3)
  - [MemInsight: Autonomous Memory Augmentation for LLM Agents](https://aclanthology.org/2025.emnlp-main.1683.pdf)
- **BERTScore** (measurements) — *measured_by*
  > "We evaluate the summary quality in relevance, coherence, factual consistency, and text compression using BertScore (Zhang et al., 2020b), HHEM-2.1-Open (Vectara, 2024), and summary length."
  - [Evaluating Small Language Models for News Summarization: Implications and Factors Influencing Performance](https://aclanthology.org/2025.naacl-long.253.pdf)
- **Information retrieval** (behaviors tasks) — *causes*
  > By explicitly modeling both consistency and relevance, our method trains a retriever to retrieve the documents necessary for answering a given question. (Section 3.2)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Expert evaluation** (measurements) — *measured_by*
  > Automatic evaluation of retrieval augmented generation (RAG) systems relies on fine-grained dimensions like faithfulness and relevance, as judged by expert human annotators.
  - [MEMERAG: A Multilingual End-to-End Meta-Evaluation Benchmark for Retrieval Augmented Generation](https://aclanthology.org/2025.acl-long.1101.pdf)
- **CLIP** (measurements) — *measured_by*
  > we employ CLIP (Radford et al., 2021) Score as the Relevance Score to quantify text-image correspondence. (Section 3.2)
  - [Exploring Artificial Image Generation for Stance Detection](https://aclanthology.org/2025.emnlp-main.1004.pdf)

### Associated with
- **Question answering** (behaviors tasks)
  > question-answering systems can have attributes of relevance, verbosity, and completeness [52].
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **Instruction following ability** (constructs)
  > Specifically, we define three fundamental dimensions of instruction-following: relevance, factuality, and adherence. (Abstract)
  - [CAMIEval: Enhancing NLG Evaluation through Multidimensional Comparative Instruction-Following Analysis](https://aclanthology.org/2025.naacl-long.438.pdf)
- **Consistency** (constructs)
  > While the answer probability by itself seemed ineffective, its combination with the question probability becomes powerful, as it evaluates the consistency among relevant documents, with irrelevant ones already filtered out due to their low question probabilities. (Section 4.2.2)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **Reward hacking** (behaviors tasks)
  > "increased energy loss reduces the upper bound of contextual relevance in LLMs, which is a critical aspect of reward hacking"
  - [The Energy Loss Phenomenon in RLHF: A New Perspective on Mitigating Reward Hacking](https://raw.githubusercontent.com/mlresearch/v267/main/assets/miao25c/miao25c.pdf)
