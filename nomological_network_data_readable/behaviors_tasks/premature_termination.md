# Premature termination
**Type:** Behavior  
**Referenced in:** 3 papers  

## State of the Field

**Space of definitions.** The available definition treats this as an observable failure mode in which the model's output sequence is abruptly shortened, so the resulting audio waveform is incomplete. The accompanying snippet uses the same criterion, describing speech token sequences with "abruptly shortened lengths" that lead to premature termination of audio waveforms (Mitigating Hallucinations in LM-Based TTS Models via Distribution Alignment Using GFlowNets).

**Variants.** The only named setting is speech generation. It is described at the level of shortened speech token sequences and incomplete audio waveforms, and no additional sub-tasks, alternative labels, or non-audio variants are named.

**Space of elicitation and scores.** No paper links this behavior to a named measurement instrument, so no recurring elicitation or scoring instrument is reported for it.

**What it is taken as evidence of.** No construct is linked to this behavior. The recorded links instead stay at the behavioral level: one paper claims a causal relationship from reward hacking to premature termination, and Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning records causal relationships in both directions between task decomposition and premature termination.

## Sources

**[Mitigating Hallucinations in LM-Based TTS Models via Distribution Alignment Using GFlowNets](https://aclanthology.org/2025.emnlp-main.976.pdf)**
> An observable failure mode where the model generates an output sequence that is abruptly shortened, resulting in incomplete audio waveforms.

## Relationships

### → Premature termination
- **Task decomposition** (behaviors tasks) — *causes*
  > The primary responsibility of the Planning Agent is doing macro-level planning through task decomposition to prevent premature termination. (Section 3.3)
  - [Smurfs: Multi-Agent System using Context-Efficient DFSDT for Tool Planning](https://aclanthology.org/2025.naacl-long.169.pdf)
- **Reward hacking** (behaviors tasks) — *causes*
  > In GOAT, reward hacking is observed when the model generates speech token sequences with abruptly shortened lengths, leading to premature termination of audio waveforms. (Section 3.3)
  - [Mitigating Hallucinations in LM-Based TTS Models via Distribution Alignment Using GFlowNets](https://aclanthology.org/2025.emnlp-main.976.pdf)
