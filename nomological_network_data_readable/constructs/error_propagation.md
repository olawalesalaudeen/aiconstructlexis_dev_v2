# Error propagation
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Error accumulation  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the surveyed work, the prevailing usage treats error propagation as a cascading-error pattern in which mistakes made early in a chain, step sequence, or token sequence spread to later parts of the reasoning process and can yield an incorrect final answer. Definitions largely agree on that pattern, though some phrase it as a tendency for errors to propagate and compound, while others describe it as an observable phenomenon in which early-token or early-step errors lower later accuracy. A smaller line of work applies the same idea to multi-agent communication, defining it as erroneous information from one agent spreading through the network and negatively influencing the system's final output.

**Space of facets.** Papers use both error propagation and error accumulation for closely related phenomena, but scope varies. Most chain-oriented accounts describe within-trace cascading at the level of reasoning steps or tokens, including a reported pattern of higher token accuracy at the beginning of the chain and lower accuracy at the end, while another account ties the effect to longer outputs that amplify compounding mistakes. A distinct multi-agent framing shifts the locus from a single reasoning trace to communication topology, where denser topologies are described as more susceptible to error spreading and sparser ones as more resistant.

**Space of measurement.** Operationalization is sparse but mostly aligned with the definitions: papers link the construct to one measurement instrument, ARES, and one behavioral indicator, Backtracking. The only named instrument is used to identify propagated errors, with one paper reporting that ARES excels at identifying them, especially in long chains; beyond that, papers operationalize the construct through analyses of whether early token or step errors are followed by lower later-token accuracy, later-step cascades, or incorrect final answers, and in multi-agent settings through analyses of how erroneous information spreads under different communication topologies. No other measurement instrument is linked to it.

**Links.** Beyond measurement, one paper claims a causal relationship from Backtracking to error propagation, describing backtracking as mitigating the phenomenon because an early misstep without backtracking cannot be corrected and performance deteriorates. One paper also relates error propagation to Robustness, stating that robustness in a balanced topology arises by mitigating error propagation through bottleneck structures while promoting rapid consensus among densely connected reliable agents. No correlation link is reported.

## Sources

**[Through the Valley: Path to Effective Long CoT Training for Small Language Models](https://aclanthology.org/2025.emnlp-main.251.pdf) (as "Error accumulation")**
> The tendency for mistakes made in early steps of a sequential reasoning process to propagate and compound, leading to an incorrect final answer.

**[Understanding the Information Propagation Effects of Communication Topologies in LLM-based Multi-Agent Systems](https://aclanthology.org/2025.emnlp-main.623.pdf)**
> The tendency for erroneous information from one agent to spread through the communication network and negatively influence the final output of the multi-agent system.

## Relationships

### Error propagation →
- **ARES** (measurements) — *measured_by*
  > Experiments on these controlled datasets confirm that ARES excels at identifying propagated errors, especially in long chains. (Section 4.2)
  - [Probabilistic Soundness Guarantees in LLM Reasoning Chains](https://aclanthology.org/2025.emnlp-main.382.pdf)

### → Error propagation
- **Backtracking** (behaviors tasks) — *causes*
  > The performance drop highlights the importance of backtracking in mitigating error propagation, where an early misstep without backtracking cannot be corrected, resulting in deteriorated performance. (Section 5.3)
  - [ReAgent: Reversible Multi-Agent Reasoning for Knowledge-Enhanced Multi-Hop QA](https://aclanthology.org/2025.emnlp-main.202.pdf)

### Associated with
- **Robustness** (constructs)
  > This robustness arises from our balanced topology design, which mitigates error propagation through bottleneck structures while promoting rapid consensus via densely connected reliable agents.
  - [Understanding the Information Propagation Effects of Communication Topologies in LLM-based Multi-Agent Systems](https://aclanthology.org/2025.emnlp-main.623.pdf)
