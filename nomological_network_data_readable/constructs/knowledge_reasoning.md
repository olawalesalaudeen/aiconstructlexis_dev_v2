# Knowledge reasoning
**Type:** Construct  
**Referenced in:** 17 papers  
**Also known as:** Knowledge and reasoning, World knowledge reasoning, Fact reasoning, Knowledge-intensive reasoning  

## State of the Field

**Definition agreement:** Consensus. Most papers define knowledge reasoning as a model's ability to answer questions or make inferences by applying factual or world knowledge, sometimes emphasizing retrieval, synthesis, or reasoning over concepts. A few papers narrow the setting to external or open-book knowledge, stored parametric knowledge, or specific relevance judgments, but these are variations in source or task context around the same core property.

**Space of definitions.** Across papers, the dominant framing treats knowledge reasoning as an ability to answer questions by drawing on factual or world knowledge and integrating that knowledge into inference. Several definitions keep this broad, referring to factual knowledge, conceptual knowledge, or comprehensive knowledge across many subjects, while smaller strands narrow it to implicit geographic, cultural, or encyclopedic facts needed for relevance judgments, or to fact reasoning with open-book information. The main point of variation is the knowledge source: some papers emphasize external facts or corpus-retrieved knowledge, while others describe knowledge-intensive reasoning as retrieving and synthesizing knowledge stored within the model's parameters.

**Space of facets.** Papers use several neighboring labels for overlapping territory, including knowledge and reasoning, fact reasoning, world knowledge reasoning, and knowledge-intensive reasoning, rather than a single fixed subtype scheme. One line of work treats world knowledge as a narrower case that links textual mentions to external facts and, in one benchmark, sits alongside arithmetic and temporal reasoning; elsewhere knowledge reasoning appears beside commonsense reasoning, mathematical reasoning, or truthfulness as a separate task category. Across these labels, some papers emphasize broad factual and conceptual knowledge, while others single out world knowledge or knowledge-intensive retrieval and synthesis.

**Space of measurement.** Operationalization is entirely benchmark-based: papers link it to 9 measurement instruments and 1 behavioral indicator, with MMLU used most often, followed by ARC, CodeMixBench, CommonsenseQA, and IMPLIRET. All linked instruments are benchmarks or datasets rather than human evaluation, LLM-as-a-judge, or probes, and they operationalize the construct through benchmark performance on tasks such as broad subject questioning, science multiple-choice questions, code-mixed knowledge reasoning, and implicit fact retrieval. This partly matches the prevailing definitions around factual knowledge plus inference, but the measurements also span both stored-knowledge settings and external-knowledge or open-book formulations.

**Links.** Beyond measurement, one paper claims a causal relationship from Question decomposition to Knowledge reasoning, stating that knowledge-intensive reasoning tasks can be complex composite problems and that decomposition is used for more accurate answer inference. Knowledge reasoning is also related to Knowledge manipulation in one paper, which describes knowledge manipulation as including knowledge recall, reasoning, and transfer. No correlational links are reported.

## Sources

**[Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)**
> The latent ability to answer questions by using external or factual knowledge and integrating it into inference.

**[Infini-gram mini: Exact n-gram Search at the Internet Scale with FM-Index](https://aclanthology.org/2025.emnlp-main.1268.pdf) (as "Knowledge and reasoning")**
> The ability to answer questions that require factual knowledge and reasoning over concepts.

**[ImpliRet: Benchmarking the Implicit Fact Retrieval Challenge](https://aclanthology.org/2025.emnlp-main.1685.pdf) (as "World knowledge reasoning")**
> The ability to connect textual mentions to external factual knowledge (e.g., that Big Ben is in the UK) to infer implicit geographic, cultural, or encyclopedic facts necessary for determining relevance.

**[Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf) (as "Fact reasoning")**
> The latent ability to reason based on factual knowledge and open-book information.

**[CER: Confidence Enhanced Reasoning in LLMs](https://aclanthology.org/2025.acl-long.390.pdf) (as "Knowledge-intensive reasoning")**
> The latent ability to answer questions by retrieving and synthesizing information from a broad base of knowledge stored within the model's parameters.

## Relationships

### Knowledge reasoning →
- **MMLU** (measurements) — *measured_by*
  > “one knowledge-intensive reasoning benchmark: the mass-multitask language understanding (MMLU) dataset (Hendrycks et al., 2020).”
  - [BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > We employ the ScienceQA [28] dataset for the knowledge reasoning task (Section 5.1.1).
  - [Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > For knowledge reasoning, we utilize Winogrande (Sakaguchi et al., 2019) (abbreviated as Wino) and CommonsenseQA (Talmor et al., 2019) (abbreviated as Comm). (Section 4)
  - [Think Thrice Before You Act: Progressive Thought Refinement in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6882dbdc34bcd094e6f858c06ce30edb-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > For knowledge reasoning, we utilize Winogrande (Sakaguchi et al., 2019) (abbreviated as Wino) and CommonsenseQA (Talmor et al., 2019) (abbreviated as Comm). (Section 4)
  - [Think Thrice Before You Act: Progressive Thought Refinement in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6882dbdc34bcd094e6f858c06ce30edb-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > OpenBookQA (Mihaylov et al., 2018) for fact reasoning (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > ARC (Clark et al., 2018), a knowledge reasoning dataset consisting of grad-school level science questions in a multiple-choice format. (Section 4.1).
  - [ParaICL: Towards Parallel In-Context Learning](https://aclanthology.org/2025.naacl-long.621.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > TriviaQA (Joshi et al., 2017): A large-scale dataset containing knowledge-intensive questions sourced from Wikipedia.
  - [CER: Confidence Enhanced Reasoning in LLMs](https://aclanthology.org/2025.acl-long.390.pdf)
- **CodeMixBench** (measurements) — *measured_by*
  > we introduce the CodeMixBench, a code-mixing evaluation benchmark including eight tasks–three for evaluating LLMs (knowledge reasoning, mathematical reasoning, and truthfulness) and five for traditional NLP tasks (LID, POS, NER, SA, and MT). (§1)
  - [CodeMixBench: Evaluating Code-Mixing Capabilities of LLMs Across 18 Languages](https://aclanthology.org/2025.emnlp-main.109.pdf)
- **IMPLIRET** (measurements) — *measured_by*
  > "IMPLIRET covers three reasoning categories: World Knowledge, Arithmetic, and Temporal."
  - [ImpliRet: Benchmarking the Implicit Fact Retrieval Challenge](https://aclanthology.org/2025.emnlp-main.1685.pdf)
- **OK-VQA** (measurements) — *measured_by*
  > OKVQA (Marino et al., 2019), Visual Common Sense Reasoning (VCR) (Zellers et al., 2019) and A-OKVQA (Schwenk et al., 2022) evaluate whether models are able to integrate outside knowledge in order to answer questions, covering a broad base of common-sense and world knowledge. (Section 2.1)
  - [Century: A Framework and Dataset for Evaluating Historical Contextualisation of Sensitive Images](https://proceedings.iclr.cc/paper_files/paper/2025/file/efc549c2d22edf2f244b7013387c6251-Paper-Conference.pdf)

### → Knowledge reasoning
- **Question decomposition** (behaviors tasks) — *causes*
  > since questions in knowledge-intensive reasoning tasks can often be a complex composite problems that are challenging to solve directly, a structured knowledge utilizer is used to perform question decomposition... for more accurate answer inference.
  - [StructRAG: Boosting Knowledge Intensive Reasoning of LLMs via Inference-time Hybrid Information Structurization](https://proceedings.iclr.cc/paper_files/paper/2025/file/5975754c7650dfee0682e06e1fec0522-Paper-Conference.pdf)

### Associated with
- **Knowledge manipulation** (constructs)
  > enhance the knowledge manipulation (e.g., knowledge recall, reasoning, and transfer) ability of LLMs. (Section 1)
  - [Knowledge Graph Finetuning Enhances Knowledge Manipulation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e44337573fcac83f219c8effa4ebf90d-Paper-Conference.pdf)
