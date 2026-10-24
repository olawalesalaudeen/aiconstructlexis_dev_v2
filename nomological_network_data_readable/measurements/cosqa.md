# CoSQA
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** CosQA  

## State of the Field

**What it is.** Across the surveyed papers, CoSQA is most commonly described as a natural-language-to-code semantic search or code search benchmark, using natural language queries to retrieve relevant code and to evaluate alignment between code and intent expressed in natural language. A smaller line of work treats CosQA as a code-oriented question answering dataset of natural language-code pairs, used to test model performance on a code question-answering task and, in one definition, a model's ability to understand and reason about code semantics.

**What it is claimed to measure.** The prevailing usage presents CoSQA as evaluating natural-language-to-code semantic search, code search, and alignment between code and natural language intent. One paper also describes it as testing code question answering and understanding and reasoning about code semantics. No paper explicitly links it to a named construct or behavioral indicator.

**Space of uses.** Papers commonly position CoSQA as one benchmark within a small group of code search evaluations, most often alongside AdvTest and a third benchmark named as CSN in one paper and CodeSearchNet in another. In that role it is described as one of the "widely-used code search benchmarks," while the question-answering framing appears as a more specific use where a paper says it uses CosQA "to test the model performance on the code question-answering task."

## Sources

**[At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf) (as "CosQA")**
> A code-oriented question answering dataset containing natural language-code pairs, used to evaluate a model’s ability to understand and reason about code semantics.

**[CODE REPRESENTATION LEARNING AT SCALE](https://proceedings.iclr.cc/paper_files/paper/2024/file/cfbba5249393100ada0bfb37557d2fd9-Paper-Conference.pdf)**
> A benchmark for natural-language-to-code semantic search using natural-language queries to retrieve relevant code.
