# Student mistake correction
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Mistake correction  

## State of the Field

**Space of definitions.** Across the available definitions, papers mainly treat this behavior as responding appropriately after a student error. One framing, used in MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors, makes success very specific: the model generates a reasoning chain and a correct final numeric answer even when the dialogue history contains an incorrect student answer. Another framing defines it more generally as providing feedback or guidance that helps a student fix an identified error in their work.

**Variants.** Papers use both the names student mistake correction and mistake correction. The studied settings differ between a dialogue-conditioned problem setting, where the student's incorrect answer appears in the history and the model is expected to produce a correct reasoning chain and final answer, and a tutoring setting centered on feedback or guidance after an error has been identified. One paper also discusses it alongside mistake location as a separate task.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the available descriptions, it is operationalized through task performance, most explicitly by checking whether the model can produce a correct reasoning chain and correct final numeric answer despite an incorrect student answer in the dialogue history.

**What it is taken as evidence of.** No construct is linked to it as evidence of, so the available papers do not specify a broader construct that this behavior is taken to reflect.

## Sources

**[MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors](https://aclanthology.org/2025.emnlp-main.11.pdf)**
> The observable task of generating a correct reasoning chain and final answer for a problem, even when conditioned on a dialogue history containing an incorrect solution from the student.

**[From Problem-Solving to Teaching Problem-Solving: Aligning LLMs with Pedagogy using Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.15.pdf) (as "Mistake correction")**
> The task of providing feedback or guidance to help a student fix an identified error in their work.
