# PopQA
**Type:** Measurement  
**Referenced in:** 53 papers  
**Also known as:** POPQA  

## State of the Field

**What it is.** Across papers, PopQA is most commonly described as an open-domain question answering benchmark for factual knowledge retrieval, especially on rare entities, low-popularity questions, and long-tail knowledge. A recurring alternative description treats it as an entity-centric QA dataset, with some definitions saying it is derived from Wikidata triples and others calling it a large-scale open-domain QA dataset. Papers also describe different ways of using it, including a long-tail subset of rare-entity queries, use as a single-hop dataset, and conversion of its questions into a closed-book sentence-completion format.

**What it is claimed to measure.** Papers link PopQA to two behavioral indicators and five constructs. The prevailing use is to measure open-domain question answering, followed by question answering, with many papers listing it directly among open-domain QA evaluation tasks. Across constructs, the links spread across generalization and factual knowledge most often, followed by knowledge conflict resolution, memorization, and text generation quality.

**Space of uses.** Papers usually position PopQA as one dataset in a broader QA benchmark suite, most often alongside TriviaQA and Natural Questions, and also with WebQ, HotpotQA, and AmbigNQ. Smaller lines of work use it as an out-of-domain check with other datasets that differ in question style and information distribution, as a benchmark with short answers scored by exact match and F1, or as sampled questions or a long-tail subset for targeted evaluations.

## Sources

**[Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)**
> Open-domain question answering dataset focusing on rare entities, evaluating factual knowledge retrieval in long-tail scenarios.

**[Adaptive Chameleon  or Stubborn Sloth: Revealing the Behavior of Large Language Models in Knowledge Conflicts](https://proceedings.iclr.cc/paper_files/paper/2024/file/99261adc8a6356b38bcf999bba9a26dc-Paper-Conference.pdf) (as "POPQA")**
> An entity-centric question answering dataset derived from Wikidata triples, used to evaluate LLMs on factual knowledge and memory consistency.

## Relationships

### → PopQA
- **Open-domain question answering** (behaviors tasks) — *measured_by*
  > Short-form generations tasks include two open-domain question answering (QA) datasets, PopQA (Mallen et al., 2023) and TriviaQA-unfiltered (Joshi et al., 2017)... (Section 4.1)
  - [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > We adapt our approach to question answering as described at the end of Section 5. We focus on 1.5K randomly sampled questions from PopQA. (Section 6.3)
  - [Self-contradictory Hallucinations of Large Language Models: Evaluation, Detection and Mitigation](https://proceedings.iclr.cc/paper_files/paper/2024/file/b0d4b9d3dc41b36cad1d36ddd27858ab-Paper-Conference.pdf)
- **Knowledge conflict resolution** (constructs) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > For factual knowledge, we use PopQA (Mallen et al., 2023), TriviaQA (Joshi et al., 2017), and Natural Questions (NQ) (Kwiatkowski et al., 2019). (Section 5)
  - [LLM Braces: Straightening Out LLM Predictions with Relevant Sub-Updates](https://aclanthology.org/2025.acl-long.393.pdf)
- **Memorization** (constructs) — *measured_by*
  > Evaluation of continual learning capabilities across three key dimensions: factual memory (NaturalQuestions, PopQA), sense-making (NarrativeQA), and associativity (MuSiQue, 2Wiki, HotpotQA, and LV-Eval) (Figure 1).
  - [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gutierrez25a/gutierrez25a.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > For out-of-domain evaluation, we introduce three datasets that differ significantly in question style and information distribution: MuSiQue (Trivedi et al., 2022), Bamboogle (Press et al., 2022), and PopQA (Mallen et al., 2022). These datasets test the model’s generalization ability beyond the training domain. (Section 4.2.1)
  - [DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf)
