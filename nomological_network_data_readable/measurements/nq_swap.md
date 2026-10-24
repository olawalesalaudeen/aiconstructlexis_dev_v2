# NQ-Swap
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the cited definitions, NQ-Swap is most commonly described as a counterfactual or knowledge conflict QA benchmark derived from Natural Questions. Papers describe it either narrowly as swapping incorrect answers into the context or more broadly as synthetic conflicting data, and both descriptions present it as testing whether a model relies on the correct evidence or can handle discrepancies.

**What it is claimed to measure.** Papers link it to 2 constructs and 1 behavioral indicator. The prevailing measurement claims are faithfulness-oriented: papers use it to measure Context faithfulness and Faithfulness, with one study describing it as a more challenging and complementary evaluation of a model's ability to identify and rely on the correct evidence. A smaller line of work also uses it to measure Question answering by including it among QA datasets.

**Space of uses.** No measurement instrument is linked to it. In the source descriptions, papers use it alongside ConfiQA and MemoTrap as a counterfactual or knowledge conflict check, and one paper includes it in a broader QA suite with Natural Question, TriviaQA, and PopQA, among other datasets. Across these uses, papers position it either as a dedicated benchmark for conflicting evidence or as one member of a larger QA evaluation.

## Sources

**[Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs](https://aclanthology.org/2025.emnlp-main.1114.pdf)**
> A counterfactual version of Natural Questions where incorrect answers are swapped into the context to test a model's reliance on correct evidence.

## Relationships

### → NQ-Swap
- **Context faithfulness** (constructs) — *measured_by*
  > we also include two counter-factual QA benchmarks: NQ-Swap and ConfiQA, offering a more challenging and complementary evaluation of a model’s ability to identify and rely on the correct evidence. (Section 3.2)
  - [Understanding and Leveraging the Expert Specialization of Context Faithfulness in Mixture-of-Experts LLMs](https://aclanthology.org/2025.emnlp-main.1114.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > We demonstrate ADACAD’s effectiveness on a diverse range of tasks, covering question-answering (QA) and summarization, with six QA datasets (Natural Question (NQ; Kwiatkowski et al., 2019), NQ-SWAP (Longpre et al., 2021), TriviaQA (Joshi et al., 2017), PopQA (Mallen et al., 2023), HotpotQA (Yang et al., 2018), TabMWP (Lu et al., 2023)) (Section 1).
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)
