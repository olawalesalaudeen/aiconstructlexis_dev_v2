# Self-Refine
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** Self-refine  

## State of the Field

Across the provided literature, Self-Refine is consistently characterized as a multi-step, iterative procedure for improving a model's output at inference time. The most prevalent definition describes it as a three-step self-reflection process where a model first generates an initial response, then critiques its own work to find problems and produce feedback, and finally revises the response based on that feedback. Some sources frame this as an "iterative reasoning strategy," where the refinement can occur over several steps. A common operationalization involves a single large language model acting as the generator, refiner, and feedback provider. This process is noted to function without external training or reinforcement learning. It is described in one paper as a "typical and widely used self-reflection method" and is sometimes employed as a baseline framework or an adaptive reasoning strategy alongside methods like Self-Consistency and Best-of-N.

## Sources

**[Breaking Mental Set to Improve Reasoning through Diverse Multi-Agent Debate](https://proceedings.iclr.cc/paper_files/paper/2025/file/3de667dab3b3d812583abc0a786139a0-Paper-Conference.pdf)**
> Self-Refine is a three-step self-reflection procedure in which the model generates an initial response, critiques it, and revises it.

**[LLM The Genius Paradox: A Linguistic and Math Expert's Struggle with Simple Word-based Counting Problems](https://aclanthology.org/2025.naacl-long.172.pdf) (as "Self-refine")**
> Iterative reasoning strategy where a model generates an initial response, critiques it, and refines the output in subsequent steps.
