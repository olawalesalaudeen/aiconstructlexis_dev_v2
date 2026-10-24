# User preference study
**Type:** Measurement  
**Referenced in:** 125 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats this as a broad human evaluation protocol rather than a single fixed benchmark. Most descriptions involve people comparing model outputs, choosing a preferred response, ranking alternatives, or rating outputs against stated criteria, with setups ranging from pairwise comparisons and win-lose judgments to Likert scales, binary labels, and free-form feedback. A smaller line of work uses the same label for interactive studies, expert review, survey-style polling, or human baseline task completion. Although one definition centers on showing a question and multiple model responses and asking users to choose the most creative and humorous one, other papers apply the protocol to correctness, faithfulness, safety, usefulness, coherence, cultural appropriateness, and similar dimensions.

**What it is claimed to measure.** Papers link this protocol to 2 behavioral indicators, Human reaction motion generation and Humor generation, and no constructs or other measurement instruments are linked to it. The linked claims therefore concentrate on behavioral indicators rather than constructs: one paper uses it to test creativity and humor, and another uses a user study for qualitative evaluation of human reaction motion generation against a latest method. Definitions also describe the protocol as assessing outputs on criteria such as correctness, completeness, safety, helpfulness, and satisfaction.

**Space of uses.** No measurement instrument is linked to it. Many papers position it as a human reference for validating automated evaluators, benchmark scores, or judge models, for example, ALiiCE: Evaluating Positional Fine-grained Citation Generation uses human evaluation to examine correlation with human judgment, while other papers use it as the main comparison between system outputs, an arena-style preference test, or a human performance baseline on tasks. The common operational pattern is side-by-side assessment of outputs, though some studies instead have participants interact with systems directly and then rate satisfaction, trust, or overall preference.

**Concerns raised.** A recurring issue in these papers is reliability: many report inter-annotator agreement, majority vote, adjudication, or correlation with human judgments, and several use detailed guidelines, codebooks, or blinded review to keep ratings consistent. DREAM: Disentangling Risks to Enhance Safety Alignment in Multimodal Large Language Models also notes the labor involved, describing manual evaluation of many sampled responses as time-consuming for human annotators.

## Sources

**[Innovative Thinking, Infinite Humor: Humor Research of Large Language Models through Structured Thought Leaps](https://proceedings.iclr.cc/paper_files/paper/2025/file/6794f555524c9069e26970a408d353cc-Paper-Conference.pdf)**
> A human evaluation protocol where participants are shown a question and responses from multiple models and asked to choose the most creative and humorous one.

## Relationships

### → User preference study
- **Humor generation** (behaviors tasks) — *measured_by*
  > We conduct a user-preference study to test the creativity and humor of LLMs. (Section 3.3)
  - [Innovative Thinking, Infinite Humor: Humor Research of Large Language Models through Structured Thought Leaps](https://proceedings.iclr.cc/paper_files/paper/2025/file/6794f555524c9069e26970a408d353cc-Paper-Conference.pdf)
- **Human reaction motion generation** (behaviors tasks) — *measured_by*
  > To further evaluate our model qualitatively, we conduct a user study on TTR vs. the latest SOTA method ReGenNet, and the results are shown in Figure 7 (Section 4.7).
  - [Think Then React: Towards Unconstrained Action-to-Reaction Motion Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea0b28cbbd0cbc45ec4ac38e92da9cb2-Paper-Conference.pdf)
