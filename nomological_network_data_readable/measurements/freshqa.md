# FreshQA
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, the dominant framing is a question-answering dataset or benchmark. Definitions converge on questions with varying time sensitivity and complexity, with papers describing it as assessing factuality and reasoning; some add paired correct and incorrect contexts, while others emphasize up-to-date information and questions whose answers change over time, framing it as a benchmark for freshness and factuality of LLM responses.

**What it is claimed to measure.** Papers use FreshQA to measure 4 constructs, and it is not linked to any behavioral indicators. The measurement claims are spread across compositional reasoning, factuality, generalization, and knowledge conflict resolution rather than centered on a single construct: papers variously list it among factuality benchmarks, use it in benchmarking situated faithful reasoning on question-answering tasks, and report it as evaluating compositional reasoning or generalization.

**Space of uses.** Papers do not link FreshQA to another measurement instrument, but they do use it alongside NaturalQA, TriviaQA, PopQA, CuQA, and MultiHop-RAG. In those uses it is positioned as one of several question-answering tasks, and in one study as a recent and challenging OOD dataset for assessing modularity and generalization.

## Sources

**[To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)**
> A question-answering dataset with varying time sensitivity and complexity used to assess factuality and reasoning under paired correct and incorrect contexts.

## Relationships

### → FreshQA
- **Factuality** (constructs) — *measured_by*
  > In recent years a proliferation of benchmarks for evaluating factuality of LLMs has been observed ... They include many established benchmarks such as ... FreshQA... (Section 2)
  - [WikiContradict: A Benchmark for Evaluating LLMs on Real-World Knowledge Conflicts from Wikipedia](https://proceedings.neurips.cc/paper_files/paper/2024/file/c63819755591ea972f8570beffca6b1b-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Knowledge conflict resolution** (constructs) — *measured_by*
  > We benchmark the current LLM’s ability to perform situated faithful reasoning on several question-answering tasks, including FreshQA (Vu et al., 2023), NaturalQA (Kwiatkowski et al., 2019), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023).
  - [To Trust or Not to Trust? Enhancing Large Language Models' Situated Faithfulness to External Contexts](https://proceedings.iclr.cc/paper_files/paper/2025/file/186a213d720568b31f9b59c085a23e5a-Paper-Conference.pdf)
- **Compositional reasoning** (constructs) — *measured_by*
  > Experimental results on CuQA and FreshQA (Vu et al., 2023) datasets show the superiority of Self-DC in terms of both effectiveness and efficiency, revealing its promising potential to solve compositional reasoning problem. (Section 1)
  - [Self-DC: When to Reason and When to Act? Self Divide-and-Conquer for Compositional Unknown Questions](https://aclanthology.org/2025.naacl-long.331.pdf)
- **Generalization** (constructs) — *measured_by*
  > In Table 2, we assess its modularity and generalization by introducing two recent and challenging OOD datasets: FreshQA (FQA) (Vu et al., 2024) and MultiHop-RAG (M-RAG) (Tang & Yang, 2024). (Section 6.3).
  - [C-3PO: Compact Plug-and-Play Proxy Optimization to Achieve Human-like Retrieval-Augmented Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25an/chen25an.pdf)
