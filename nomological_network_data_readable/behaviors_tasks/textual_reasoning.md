# Textual reasoning
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Verbal reasoning, Natural language reasoning  

## State of the Field

**Space of definitions.** Across the definitions, the shared framing is reasoning carried out through natural language: solving reasoning problems expressed in text, drawing inferences or making judgments from text-based premises, or answering problems directly in natural language. Papers use the labels verbal reasoning, natural language reasoning, and textual reasoning for closely related formulations. A smaller set of definitions further narrows it by saying it does not rely primarily on mathematical calculation or on executable code.

**Variants.** Papers vary in granularity: some refer broadly to a variety of verbal reasoning problems, while others organize it into benchmark suites covering question answering, natural language inference, sentence completion, and coreference resolution. Another line studies it in multimodal settings that pair it with visual understanding, and one formulation emphasizes multi-step reasoning via natural language.

**Space of elicitation and scores.** Papers link it to 3 measurement instruments: AlpacaEval, MATH, and XNLI. The recorded uses describe AlpacaEval as assessing "pure text reasoning ability," MATH as part of challenging reasoning benchmarks, and XNLI as a benchmark used to test what happens after fine-tuning on code. A separate paper also says textual reasoning is measured by test output prediction, a task designed to study natural language reasoning and test generation.

**What it is taken as evidence of.** Papers link it to several constructs through related claims rather than direct measurement claims. It is linked to 4 constructs: visual understanding, chain-of-thought reasoning, mathematical reasoning, and planning. The emphases differ, with multimodal papers saying models can be capable of textual reasoning yet still struggle to handle visual understanding with it, one paper associating it with chain-of-thought style multi-step natural-language reasoning, and other papers contrasting it with mathematical reasoning or planning by saying it "struggles with quantitative reasoning" and that text is not the best format for "precise computation and planning."

## Sources

**[Conformal Language Model Reasoning with Coherent Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/679fcceef65c3d855aa885bd024542c1-Paper-Conference.pdf) (as "Verbal reasoning")**
> The observable task of solving reasoning problems expressed in natural language without relying primarily on mathematical calculation.

**[Montessori-Instruct: Generate Influential Training Data Tailored for Student Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba1d33849b963efc6b5d3082ad68f480-Paper-Conference.pdf) (as "Natural language reasoning")**
> Drawing inferences or making judgments from text-based premises in benchmark tasks.

**[Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf)**
> Answering a problem directly in natural language without relying on executable code.

## Relationships

### Textual reasoning →
- **AlpacaEval** (measurements) — *measured_by*
  > To assess the model’s pure text reasoning ability, we use AlpacaEval (Li et al., 2023a). (Section 4.2)
  - [UnifiedVisual: A Framework for Constructing Unified Vision-Language Datasets](https://aclanthology.org/2025.emnlp-main.1572.pdf)
- **Code debugging** (behaviors tasks) — *causes*
  > Our findings highlight the potential of natural language reasoning to advance automated code debugging and address complex programming challenges. (Abstract)
  - [NL-Debugging: Exploiting Natural Language as an Intermediate Representation for Code Debugging](https://aclanthology.org/2025.emnlp-main.80.pdf)

### Associated with
- **Visual understanding** (constructs)
  > This indicates that VLMs are capable of textual reasoning. This finding suggests that the reasoning challenge does not mainly lie in the VLM’s textual components but in the visual ones. (Page 8)
  - [NL-Eye: Abductive NLI For Images](https://proceedings.iclr.cc/paper_files/paper/2025/file/d5aed68fde8e934d0ae4aadb57acc6c0-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs)
  > Natural Language Reasoning: we prompt LLMs to perform multi-step reasoning via natural language, and select the following publicly avaibable datasets: GSM8k [34] contains grade school math problems to test the basic arithmetic and reasoning ability. (Appendix C)
  - [JiuZhang3.0: Efficiently Improving Mathematical Reasoning by Training Small Data Synthesis Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0356216f73660e15670510f5e42b5fa6-Paper-Conference.pdf)
- **Natural language inference** (behaviors tasks)
  > Natural language reasoning suite consists of 11 benchmarks that involve natural language based reasoning such as Question Answering, natural language inference (NLI), sentence completion, co-reference resolution, and general intelligence.
  - [To Code or Not To Code? Exploring Impact of Code in Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/c513d1786f85531fac7050947736265f-Paper-Conference.pdf)
- **Sentence completion** (behaviors tasks)
  > Natural language reasoning suite consists of 11 benchmarks that involve natural language based reasoning such as Question Answering, natural language inference (NLI), sentence completion, co-reference resolution, and general intelligence.
  - [To Code or Not To Code? Exploring Impact of Code in Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/c513d1786f85531fac7050947736265f-Paper-Conference.pdf)
- **Coreference resolution** (behaviors tasks)
  > Natural language reasoning suite consists of 11 benchmarks that involve natural language based reasoning such as Question Answering, natural language inference (NLI), sentence completion, co-reference resolution, and general intelligence.
  - [To Code or Not To Code? Exploring Impact of Code in Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/c513d1786f85531fac7050947736265f-Paper-Conference.pdf)
- **Planning** (constructs)
  > Text is suitable for semantic analysis and commonsense reasoning, but is not the best format for precise computation and planning, symbolic manipulation, and algorithmic processing and optimization (Kambhampati et al., 2024b; Chen et al., 2024a). (Section 1)
  - [Steering Large Language Models between Code Execution and Textual Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/f763f7c9a6599e14b07add5937d8189c-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs)
  > Textual reasoning ... struggles with quantitative reasoning.
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **Test output prediction** (behaviors tasks)
  > Finally, we introduce a new task that is designed to study natural language reasoning and test generation.
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)
- **Natural language understanding** (constructs)
  > Textual reasoning excels in natural language understanding
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
