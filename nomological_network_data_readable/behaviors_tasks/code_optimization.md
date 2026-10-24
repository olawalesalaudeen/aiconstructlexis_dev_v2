# Code optimization
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** Across the available papers, the behavior is treated as improving existing code so that it is more correct and more runtime efficient. One paper states that the task "aims to refine code snippets to improve their correctness and runtime efficiency" (Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization), while another defines it as generating a functionally equivalent but faster-running version of a given program, validated through unit tests and execution time comparison. The papers agree on optimization through code revision, but differ in emphasis between jointly improving correctness and efficiency, and preserving functionality while increasing speed.

**Variants.** The papers study it in closely related forms: iterative refinement with limited supervision from local tests and self-evaluation, and performance-improving edits to an existing program. One line of work also frames it through evolving edit sequences, tracking a programmer’s submissions over time and filtering for sequences of edits that correspond to performance improvements (Learning Performance-Improving Code Edits). Across these variants, the common thread is refining or editing code rather than evaluating a static solution.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, the papers operationalize the behavior through local tests, unit tests, execution time comparison, and iterative self-evaluation, with validation centered on program behavior and runtime.

**What it is taken as evidence of.** No construct is linked to it, so the papers do not specify what broader construct this behavior is taken to indicate.

## Sources

**[Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf)**
> The process of iteratively improving code snippets for correctness and runtime efficiency using feedback from test cases and self-evaluation.
