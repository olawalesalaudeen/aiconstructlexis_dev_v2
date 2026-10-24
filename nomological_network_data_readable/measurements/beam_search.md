# Beam search
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** Beam Search  

## State of the Field

Across the provided literature, Beam search is consistently characterized as a heuristic search technique or tree-search procedure used during model inference. The prevailing description is that it operates by maintaining a fixed number of candidate partial solutions, often referred to as the "beam size," at each step of a process. Its primary stated purpose is to find a "most probable sequence" or high-quality solution by iteratively expanding and pruning potential reasoning paths. A common operationalization involves using a Process Reward Model (PRM) or "verifier scores" to rank and select the candidates to expand. As described in multiple sources, the procedure samples a number of initial predictions, ranks them using the PRM's step score, and retains the top candidates to continue the search. One paper notes that this process "optimizes the PRM by searching over its per-step predictions" ("Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Parameters for Reasoning"). While its use with a PRM is a recurring theme, it is also described more generally as a technique for baseline models.

## Sources

**[Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Parameters for Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1b623663fd9b874366f3ce019fdfdd44-Paper-Conference.pdf)**
> A tree-search procedure that keeps a fixed number of candidate partial solutions and expands them using verifier scores.

**[Circuit Transformer: A Transformer That Preserves Logical Equivalence](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f75a57e9c71e8369da0150ea769d5a2-Paper-Conference.pdf) (as "Beam Search")**
> A heuristic search technique used for baseline models to find the most probable sequence by maintaining fixed candidates.
