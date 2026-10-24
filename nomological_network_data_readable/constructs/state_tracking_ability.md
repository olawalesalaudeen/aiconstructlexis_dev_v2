# State tracking ability
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** State tracking, State Tracking, State-tracking, Fluent tracking, Task tracking, Stateful processing, Tracking past actions, Quantity tracking, Long-range consistency  

## State of the Field

**Definition agreement:** Consensus. Most papers define state tracking ability as maintaining and updating a representation of relevant state across a sequence of inputs, updates, or operations, whether for a world, system, or task. A few papers phrase this through specific settings such as subgoal progress, action history, persistent object properties, or reusing intermediate results, but these are best read as examples or observable manifestations of the same core ability rather than different constructs.

**Space of definitions.** Across papers, the prevailing usage treats state tracking ability as a latent capacity to maintain and update an internal representation of state as inputs, updates, or operations unfold. This common framing appears in definitions centered on an evolving world state, a system's state from observed updates, or an internal state for sequential operations. A smaller line of work uses narrower, task-bound versions: maintaining the complete final set of fluents after actions, inferring which fluents remain valid, tracking task progress and partner actions, keeping a running quantity, reusing intermediate results over long computations, or tracking past actions. The main disagreement is therefore between a broad internal-state ability and more specific observable or task-level tracking behaviors.

**Space of facets.** Papers mainly organize the construct through named subcases and adjacent labels. One recurring distinction is between fluent tracking, which asks which properties remain valid after a sequence of actions, and a broader state tracking category that queries the complete set of final-state fluents, and one paper explicitly says the latter extends the former. Some authors also use nearby labels such as stateful processing, or shift the focus to task progress, quantity updates, long-range consistency, or action history. As a result, the term appears both as a general model ability and as the name of benchmark categories or observable behaviors.

**Space of measurement.** Papers link it to one measurement instrument and four behavioral indicators. Direct measurement uses the benchmark MCBench, which operationalizes the construct as carrying intermediate results across several steps and reusing them later, and the behavioral tasks parity checking and modular arithmetic, which are used to demonstrate state-tracking performance. The remaining linked behavioral indicators enter through non-measurement links. Overall, these operationalizations target sequential maintenance and updating, matching the prevailing definition more closely than the narrower variants about fluents, task progress, quantities, or past actions. No construct is linked to it.

**Links.** Beyond measurement, one paper claims a causal relationship from state tracking ability to mathematical problem solving, describing mathematics as a task linked to state tracking. One paper also relates it to state tracking used as a benchmark category, where state tracking is described as extending fluent tracking. No correlational link is reported.

## Sources

**[Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf) (as "State tracking")**
> The ability to maintain and update an internal representation of state over a sequence of inputs, crucial for complex reasoning and coding tasks.

**[Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf) (as "State-tracking")**
> The ability of a model to maintain and update an internal representation of a system's state based on a sequence of observed updates.

**[ActionReasoningBench: Reasoning about Actions with and without Ramification Constraints](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf42f133f355e0e07a8957b508b26a1b-Paper-Conference.pdf) (as "State Tracking")**
> The ability to maintain a complete and accurate representation of all properties (fluents) in the world after a sequence of actions has occurred.

**[ActionReasoningBench: Reasoning about Actions with and without Ramification Constraints](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf42f133f355e0e07a8957b508b26a1b-Paper-Conference.pdf) (as "Fluent tracking")**
> The ability to infer which properties of an object remain valid after a sequence of actions from the changed state.

**[PARTNR: A Benchmark for Planning and Reasoning in Embodied Multi-agent Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cf318fbeec1126da21e9185ae9908c-Paper-Conference.pdf) (as "Task tracking")**
> The ability to maintain an internal state of task progress, including which sub-goals have been completed and which are still pending, especially in the presence of a partner's actions.

**[Minerva: A Programmable Memory Test Benchmark for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xia25c/xia25c.pdf) (as "Stateful processing")**
> The ability to maintain and update an internal state based on a sequence of operations described in the context.

**[RefactorBench: Evaluating Stateful Reasoning in Language Agents Through Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b44ee74539ea77d6a0d50d468724371-Paper-Conference.pdf) (as "Tracking past actions")**
> The observable behavior of maintaining and reasoning about the history of actions taken during a task trajectory.

**[Minerva: A Programmable Memory Test Benchmark for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xia25c/xia25c.pdf) (as "Quantity tracking")**
> Maintaining and updating a running total of items through a sequence of add and subtract operations.

**[Metric Calculating Benchmark: Code-Verifiable Complicate Instruction Following Benchmark for Large Language Models](https://aclanthology.org/2025.emnlp-main.1051.pdf) (as "Long-range consistency")**
> The ability to maintain and correctly reuse intermediate results and other information across multiple steps of a long computational process.

## Relationships

### State tracking ability →
- **MCBench** (measurements) — *measured_by*
  > MCBench evaluates three key capabilities of LLMs: ... • Long-Range Consistency: To finish the computation, the model must carry intermediate results across several steps and reuse them later
  - [Metric Calculating Benchmark: Code-Verifiable Complicate Instruction Following Benchmark for Large Language Models](https://aclanthology.org/2025.emnlp-main.1051.pdf)

### Associated with
- **Mathematical problem solving** (behaviors tasks)
  > models (especially DeltaNet) with extended eigenvalue range will perform better on language modeling tasks linked to state-tracking such as coding or mathematics
  - [Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf)
- **Parity checking** (behaviors tasks)
  > We test the modified methods on parity, modular arithmetic, and permutation composition, demonstrating improved state-tracking performance.
  - [Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf)
- **Modular arithmetic** (behaviors tasks)
  > We test the modified methods on parity, modular arithmetic, and permutation composition, demonstrating improved state-tracking performance.
  - [Unlocking State-Tracking in Linear RNNs Through Negative Eigenvalues](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a0ce3abb720b740419e193c87afd080-Paper-Conference.pdf)
