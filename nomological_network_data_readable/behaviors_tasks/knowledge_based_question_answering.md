# Knowledge-based question answering
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Knowledge question answering, Knowledge-intensive question answering  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this as question answering that depends on factual or domain knowledge and some degree of inference or synthesis. Most definitions describe answering questions by making inferences over domain-specific or general knowledge, or by recalling and applying factual information from internal or external sources. The expected output is an answer to a specific question, sometimes explicitly based on knowledge articles, a knowledge base, or provided documents. A smaller line of work narrows the task to shorter-context questions requiring specialized retrieval, while some descriptions extend it to open-domain or long-tail knowledge questions.

**Variants.** Papers use several nearby names, especially knowledge question answering and knowledge-intensive question answering alongside knowledge-based question answering. The studied settings range from short-context factual or conceptual questions and benchmark-formatted factual QA, to answering from knowledge articles, a knowledge base, or large sets of dispersed documents. Mentioned domains include education and medicine, Chinese knowledge quiz tasks, time-sensitive queries, and specialized factual questions such as those about Alan Turing, and one paper notes that these tasks can span a wider range of knowledge domains and more colloquial expressions.

**Space of elicitation and scores.** Papers operationalize it with 6 measurement instruments. Linked instruments include ARC, MMLU, Natural Questions, PubMedQA, and SciQA, with 1 other instrument also used. Their descriptions frame them as datasets or benchmarks for knowledge-intensive reasoning, deep domain understanding, and knowledge QA tasks with shorter context but challenging knowledge demands.

**What it is taken as evidence of.** Papers connect this behavior to 2 constructs, and the framing is not uniform. One paper uses knowledge-based question answering to measure parametric knowledge, describing this question type as evaluating a model's internal knowledge retained by the base model. Another paper reports it is related to reasoning, stating that the model is required to make inferences based on the necessary reasoning background.

## Sources

**[Cost-efficient Knowledge-based Question Answering with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0aafec03d59db29a92fa683bd783374-Paper-Conference.pdf)**
> The task of answering questions by making inferences over a body of domain-specific or general knowledge.

**[CRMArena: Understanding the Capacity of LLM Agents to Perform Professional CRM Tasks in Realistic Environments](https://aclanthology.org/2025.naacl-long.194.pdf) (as "Knowledge question answering")**
> Answering domain-specific factual or conceptual questions from short contexts, often requiring retrieval of specialized knowledge.

**[Chunk-Distilled Language Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d4d9fc36c783fcd31af2fda532e6c33-Paper-Conference.pdf) (as "Knowledge-intensive question answering")**
> The task of answering questions that require recalling and synthesizing specific factual information, such as details about a historical figure.

## Relationships

### Knowledge-based question answering →
- **TriviaQA** (measurements) — *measured_by*
  > “Datastore scaling brings major improvements to knowledge-intensive question answering tasks such as NQ and TQA”
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > “Datastore scaling brings major improvements to knowledge-intensive question answering tasks such as NQ and TQA”
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > For knowledge-intensive reasoning, we use datasets that require deep domain understanding. ARC (Clark et al., 2018) tests advanced reasoning with grade-school science questions
  - [OCEAN: Offline Chain-of-thought Evaluation and Alignment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e9dbfc971b5f8e74f41e335ff3d658-Paper-Conference.pdf)
- **PubMedQA** (measurements) — *measured_by*
  > For knowledge-intensive reasoning, we use datasets that require deep domain understanding. ... PubMedQA (Jin et al., 2019) assesses biomedical reasoning from abstracts
  - [OCEAN: Offline Chain-of-thought Evaluation and Alignment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e9dbfc971b5f8e74f41e335ff3d658-Paper-Conference.pdf)
- **SciQA** (measurements) — *measured_by*
  > For knowledge-intensive reasoning, we use datasets that require deep domain understanding. ... and SciQA (Auer et al., 2023) challenges models using the Open Research Knowledge Graph.
  - [OCEAN: Offline Chain-of-thought Evaluation and Alignment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e9dbfc971b5f8e74f41e335ff3d658-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > We first evaluated knowledge QA tasks that contain shorter context but require more challenging knowledge. Three subtopics of MMLU (Hendrycks et al., 2020) are considered (Section 4.1).
  - [Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf)

### Associated with
- **Reasoning** (constructs)
  > Given a question, the model is required to make inferences based on necessary reasoning background [14]. (Section 1)
  - [Cost-efficient Knowledge-based Question Answering with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0aafec03d59db29a92fa683bd783374-Paper-Conference.pdf)
- **Parametric knowledge** (constructs)
  > Knowledge-based Question Answering (KG): This type of question evaluates the model’s internal knowledge, which is retained by the base large language models (Section 2.2).
  - [Streaming Video Understanding and Multi-round Interaction with Memory-enhanced Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad2fa437f7c23e4e9875599c6065d18a-Paper-Conference.pdf)
