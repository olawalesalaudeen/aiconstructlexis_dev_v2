# Response evaluation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Answer critique, Judgement generation, Response judging, Comprehensive analysis  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is the generation of an explicit judgement about another model's response: an assessment, score, selection, or classification based on quality, relevance, or correctness. Several descriptions place an LLM or LMM in the evaluator role, often centered on the final evaluation outcome, and one paper explicitly calls this output "the final judgement"; some also require structured rationales alongside scalar scores. A smaller framing emphasizes the analysis process behind the judgement, describing the evaluator as examining the components and structure of a query and response, and where criteria are stated, papers refer to accurate judgements and consistency with ground-truth.

**Variants.** Papers study this behavior under several names, including answer critique, judgement generation, and response judging. The settings range from vision-language question answering, where models critique a given answer with structured rationales and scalar scores, to text judging tasks that compare two or more responses or are used in response ranking, reward modeling, and verifying agent task completion. Some descriptions single out hard queries and complicated responses, where the judging behavior is framed as requiring more comprehensive analysis.

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. When papers specify the observable output, they describe structured rationales and scalar scores, or a final judgement expressed as a selection, score, or classification.

**What it is taken as evidence of.** No construct is linked to this behavior as what it indicates.

## Sources

**[VERITAS: Leveraging Vision Priors and Expert Fusion to Improve Multimodal Data](https://aclanthology.org/2025.emnlp-main.1002.pdf) (as "Answer critique")**
> Producing structured rationales and scalar scores evaluating the quality of a given answer to a vision-language question.

**[Direct Judgement Preference Optimization](https://aclanthology.org/2025.emnlp-main.103.pdf) (as "Judgement generation")**
> Producing a final evaluation outcome (e.g., selection, score, classification) based on analysis of model responses.

**[Beyond the Surface: Measuring Self-Preference in LLM Judgments](https://aclanthology.org/2025.emnlp-main.86.pdf) (as "Response judging")**
> The observable behavior of a large language model acting as an evaluator to assess the quality of text, often by comparing two or more responses.

**[RocketEval: Efficient automated LLM evaluation via grading checklist](https://proceedings.iclr.cc/paper_files/paper/2025/file/937defc32e8ad2daba66a0e434177ae9-Paper-Conference.pdf) (as "Comprehensive analysis")**
> The ability to thoroughly examine and understand the components and structure of a query and response to form a judgment.
