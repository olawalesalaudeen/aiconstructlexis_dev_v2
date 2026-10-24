# Error recovery
**Type:** Construct  
**Referenced in:** 17 papers  
**Also known as:** Failure recovery, Error tolerance, Error handling, Out-of-sync recovery  

## State of the Field

**Definition agreement:** Consensus. Most papers define error recovery as an agent or model's ability to detect mistakes or unexpected states, correct or adapt its actions, plans, reasoning, or internal state, and continue making progress toward the task or goal. A few papers focus on specific settings such as code revision, tool use, intermediate reasoning errors, or state resynchronization, but these are narrower instances of the same core capability rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats this as a latent ability to recover from errors or failures and keep making progress toward task completion. Papers phrase that recovery as handling mistakes in perception, skill execution, or partner actions, adjusting a plan after an invalid action or unexpected state change, or correcting course from execution feedback such as error messages. Some definitions explicitly include error detection, diagnosis, and management, not only correction after the fact, and a smaller line of work narrows the construct either to resynchronizing an internal belief state with the true state after divergence or to observable self-correction during inference after invalid tool calls or flawed reasoning.

**Space of facets.** Papers use several nearby labels for closely related capabilities, including error recovery, failure recovery, error tolerance, error handling, and out-of-sync recovery. The recurring components are error identification or detection, recovery loops, self-correction, fallback strategies, and continued progress after mistakes, with error sources described as perception grounding errors, skill failures, invalid actions, unexpected state changes, and partner actions. One narrower subtype centers on belief-state mismatch and resynchronization, described as identifying the root cause of a state mismatch, acquiring the missing update, and updating belief state, and one paper also contrasts asynchronous with synchronous recovery.

**Space of measurement.** No measurement instrument is linked to it. Papers do link it to five behavioral indicators, Backtracking, Error detection, Self-reflection, Task completion, and Technical problem solving, and no constructs are linked. In use, the capability is made concrete through behaviors such as regenerating actions after a detected failure state, revising code or reasoning from execution feedback, re-prompted self-reflection that revises reasoning or tool choice, and exploring the environment or consulting collaborators to resolve state misalignments; these operationalizations largely follow the dominant framing of recovering and continuing after errors, though some focus narrowly on tool-use mistakes, execution feedback, or out-of-sync resynchronization.

**Links.** Only causal links are reported. One paper claims a causal relationship from Error recovery to Task completion, while other papers claim causal relationships from Technical problem solving to Error recovery, from Self-reflection to Error recovery, from Backtracking to Error recovery, and from Error detection to Error recovery.

## Sources

**[PARTNR: A Benchmark for Planning and Reasoning in Embodied Multi-agent Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a3cf318fbeec1126da21e9185ae9908c-Paper-Conference.pdf)**
> The ability to recover from mistakes in perception, skill execution, or partner actions and continue toward task completion.

**[Robotouille: An Asynchronous Planning Benchmark for LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/d033407a1a4b7a75cd5f9e4575ad9fb5-Paper-Conference.pdf) (as "Failure recovery")**
> The ability of an agent to effectively adjust its plan and continue making progress toward a goal after encountering an invalid action or unexpected state change.

**[OpenRCA: Can Large Language Models Locate the Root Cause of Software Failures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/d29b8d53678015079e1d245c023e49d2-Paper-Conference.pdf) (as "Error tolerance")**
> The capability of a model to effectively handle and recover from errors, such as by revising its code or adjusting its reasoning based on execution feedback.

**[SPA-BENCH: A COMPREHENSIVE BENCHMARK FOR SMARTPHONE AGENT EVALUATION](https://proceedings.iclr.cc/paper_files/paper/2025/file/9a75f4dd9679aa4ff80a4e6f0a1dc700-Paper-Conference.pdf) (as "Error handling")**
> The latent capability of an agent to detect, recover from, and manage execution errors or unexpected situations during task performance.

**[SyncMind: Measuring Agent Out-of-Sync Recovery in Collaborative Software Engineering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25l/guo25l.pdf) (as "Out-of-sync recovery")**
> The ability of an agent to detect that its internal understanding of a system state has diverged from the true state, diagnose the cause of the mismatch, and update its understanding to resynchronize.

## Relationships

### → Error recovery
- **Technical problem solving** (behaviors tasks) — *causes*
  > This observation further substantiates that successful out-of-sync recoveries hinge on not only agents’ technical problem-solving proficiency, but their efficient cause analysis and effective collaboration capabilities.
  - [SyncMind: Measuring Agent Out-of-Sync Recovery in Collaborative Software Engineering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25l/guo25l.pdf)
- **Self-reflection** (behaviors tasks) — *causes*
  > SCRIBE combines domain-specific tools with a self-reflective inference pipeline that supports iterative reasoning, tool use, and error recovery. (Abstract)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)
- **Backtracking** (behaviors tasks) — *causes*
  > BacktrackAgent explicitly incorporates a backtracking mechanism to observe the outcomes of action executions, allowing it to detect and recover from error states effectively. (Section 2)
  - [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://aclanthology.org/2025.emnlp-main.212.pdf)

### Associated with
- **Task completion** (behaviors tasks)
  > “DigiRL is able to recover from such states and complete complex instruction as requested”
  - [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/1704ddd0bb89f159dfe609b32c889995-Paper-Conference.pdf)
- **Error detection** (behaviors tasks)
  > If both the Verifier and the Judger confirm that ai t is correct, the agent considers it the final action at time-step t and proceeds to time-step t+1. Otherwise, the agent goes to the Reflector for error recovery. (Section 3.2)
  - [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://aclanthology.org/2025.emnlp-main.212.pdf)
