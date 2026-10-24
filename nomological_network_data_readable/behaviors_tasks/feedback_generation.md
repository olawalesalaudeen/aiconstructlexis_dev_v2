# Feedback generation
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Verbal feedback generation, Feedback comment generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage is a natural-language rationale or explanation that accompanies an evaluation, most commonly explaining why a response received a particular score. As one paper puts it, "Feedback: A rationale of why the provided response would receive a particular score. This is analogous to Chain-of-Thoughts" (Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models). Smaller strands use the same label for a short explanation of why code failed, a richer reflection on how a model can be improved, diagnostic feedback for prompt refinement, or personalized formative feedback that pinpoints strengths and addresses weaknesses.

**Variants.** Papers study several named variants and settings. They use "verbal feedback generation" for rich natural-language reflection used across iterations, and "feedback comment generation" for essay assessment; within essay feedback, authors mention corrective comments, holistic comments, and multi-dimensional analytic comments. Other recurring settings are code failure explanation for self-repair or debugging, feedback used to generate refined prompts, and tutoring feedback on quizzes or exercises.

**Space of elicitation and scores.** No measurement instrument is linked to it. In these papers, the behavior is operationalized directly as the generated text itself, variously a rationale, a short explanation, a verbal reflection, or an essay feedback comment.

**What it is taken as evidence of.** No paper here links feedback generation to a construct. Instead, individual papers claim causal relationships from feedback generation to neural self-repair, code debugging, response revision, and code improvement. One paper, for example, states that "Artificially boosting the quality of the feedback significantly improves the efficacy of self-repair" (Is Self-Repair a Silver Bullet for Code Generation?).

## Sources

**[Is Self-Repair a Silver Bullet for Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9ddc141bdbf9d1db510cefff56c586ad-Paper-Conference.pdf)**
> Producing a rationale explaining why a particular score was assigned to a model response, analogous to chain-of-thought reasoning in evaluation.

**[Data-Driven Discovery of Dynamical Systems in Pharmacology using Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/aea8bdc42d8ba3a67a69b3f18be93f69-Paper-Conference.pdf) (as "Verbal feedback generation")**
> The behavior of generating natural language text that reflects on a model's performance and provides specific suggestions for improvement.

**[LLMs can Perform Multi-Dimensional Analytic Writing Assessments: A Case Study of L2 Graduate-Level Academic English Writing](https://aclanthology.org/2025.acl-long.423.pdf) (as "Feedback comment generation")**
> The observable task of producing qualitative, textual feedback for an essay, intended to explain an assessment or guide improvement.

## Relationships

### Feedback generation →
- **Code debugging** (behaviors tasks) — *causes*
  > Finally, this feedback is used by the code model to repair the program (5). (Figure 1 caption)
  - [Is Self-Repair a Silver Bullet for Code Generation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9ddc141bdbf9d1db510cefff56c586ad-Paper-Conference.pdf)
- **Response revision** (behaviors tasks) — *causes*
  > “This feedback, comprising ratings and detailed explanations, informs the central agent’s revisions to its initial response.”
  - [Training Socially Aligned Language Models on Simulated Social Interactions](https://proceedings.iclr.cc/paper_files/paper/2024/file/d763b4a2dde0ae7b77498516ce9f439e-Paper-Conference.pdf)
- **Code improvement** (behaviors tasks) — *causes*
  > The question-answer pairs are then used to generate ameliorative feedback to further refine the 3D object... feedback, Fref, is then applied to refine the code, as described Eq. (3). (Section 3.3)
  - [Generating CAD Code with Vision-Language Models for 3D Designs](https://proceedings.iclr.cc/paper_files/paper/2025/file/81a934cd364e18ea6fdeaf57a93c17d4-Paper-Conference.pdf)
