# EntityQuestions
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** ENTITYQUESTIONS, Entity Questions  

## State of the Field

**What it is.** Papers describe EntityQuestions as a question answering dataset. The prevailing description is a closed-book QA specific dataset containing knowledge across 24 topics extracted from Wikipedia and used to construct training and testing sets, while another paper frames it more broadly as a fact-seeking QA dataset centered on entity-related factual knowledge.

**What it is claimed to measure.** In the recorded relationships, papers link it to one behavioral indicator, Closed-book question answering, which is measured by EntityQuestions, and no constructs are linked to it. Separately, one definition describes it as being used to evaluate non-factuality prediction in fact-seeking question answering.

**Space of uses.** Papers use EntityQuestions in different evaluation roles. One paper uses it to construct training and testing datasets for experiments, while another poses questions from it alongside PopQA and Natural Questions as one of three widely-used QA datasets; papers do not link it to any other measurement instrument.

## Sources

**[Analyzing the Effects of Supervised Fine-Tuning on Model Knowledge from Token and Parameter Levels](https://aclanthology.org/2025.emnlp-main.25.pdf) (as "ENTITYQUESTIONS")**
> A dataset for closed-book question answering containing knowledge across 24 topics extracted from Wikipedia, used to construct training and testing sets.

**[FacLens: Transferable Probe for Foreseeing Non-Factuality in Fact-Seeking Question Answering of Large Language Models](https://aclanthology.org/2025.emnlp-main.937.pdf) (as "Entity Questions")**
> Fact-seeking question answering dataset focusing on entity-related factual knowledge, used to evaluate non-factuality prediction.

## Relationships

### → EntityQuestions
- **Closed-book question answering** (behaviors tasks) — *measured_by*
  > we use the ENTITYQUESTIONS (Sciavolino et al., 2021) to construct the training and testing datasets for our experiments, which is a CBQA-specific dataset containing knowledge across 24 topics extracted from Wikipedia (Section 3.1).
  - [Analyzing the Effects of Supervised Fine-Tuning on Model Knowledge from Token and Parameter Levels](https://aclanthology.org/2025.emnlp-main.25.pdf)
