# Question rephrasing
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Question rewriting  

## State of the Field

**Space of definitions.** Most papers treat this behavior as rewording a question while preserving its meaning, and some definitions add that the answer should also stay the same. The prevailing usage covers both general question paraphrases and mathematical questions in different linguistic forms, while a smaller line of work frames it as modifying a visual question so its intent is preserved while the wording becomes less ambiguous or better aligned with model capabilities. Some authors also describe success as a simpler restatement when misunderstanding of the original question is suspected.

**Variants.** Papers use both question rephrasing and question rewriting as names for closely matched tasks. Studied variants include rephrasing prompting to generate more mathematical questions, a visual-grounding setting with a rephrasing and augmenting stage that proposes modifications to the original question from image details, problem-solving workflows that add an action to rephrase the question more simply, and evaluation protocols that build rephrased benchmarks by asking an LLM to rewrite each question without altering meaning.

**Space of elicitation and scores.** Papers link it to 1 measurement instrument, LLM-as-a-judge. The recorded link is related rather than measured_by: in one evaluation protocol, an LLM is tasked to rephrase questions without changing their meaning.

**What it is taken as evidence of.** No construct is linked to question rephrasing in the recorded relationships, so papers do not explicitly state what construct this behavior indicates.

## Sources

**[MetaMath: Bootstrap Your Own Mathematical Questions for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c400474e8a36d0812fdee52739288b12-Paper-Conference.pdf)**
> Rewriting a mathematical question in different linguistic forms while preserving its meaning and answer.

**[Instructive Decoding: Instruction-Tuned Large Language Models are Self-Refiner from Noisy Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/1f5c76187c28e8d9d3b938d0c504436c-Paper-Conference.pdf) (as "Question rewriting")**
> Rephrasing a question while preserving its meaning.
