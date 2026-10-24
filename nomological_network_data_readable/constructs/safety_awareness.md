# Safety awareness
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Risk awareness  

## State of the Field

**Definition agreement:** Consensus. Most papers define safety awareness as a model or agent's latent capacity to recognize risky or harmful situations and respond safely, typically by avoiding unsafe actions or seeking confirmation before high-stakes ones. One paper instead describes it in terms of internal representations that separate safe from toxic content, but the dominant usage is the same behavioral safety-recognition-and-response property.

**Space of definitions.** Across the surveyed papers, the prevailing usage treats safety awareness as a latent ability or disposition to recognize risky, sensitive, or potentially harmful situations and handle them cautiously, often by avoiding the action or seeking user confirmation before high-stakes execution. This framing appears in descriptions of agents that assess the sensitivity of each action, seek user confirmation before executing such actions, and are expected to be aware of potential risks before executing risky actions. Smaller lines of work shift the focus to output-level safety, defining it as sensitivity to safety-related risks and avoidance of unsafe outputs across risk categories, or to internal model representations, defining it as whether the model encodes clear distinctions between safe and toxic content strongly enough for reliable toxicity estimates.

**Space of facets.** Papers organize the construct through recurring contrasts: sensitive or high-stakes actions versus ordinary ones, safe versus toxic content, suspicious pop-ups versus typical digital content, and different risk categories. Some authors use the nearby label risk awareness for much the same action-level capacity to recognize dangerous situations and respond appropriately. Taken together, the term is applied to action execution, pop-up handling, unsafe-output avoidance, and the clarity of internal safe versus unsafe distinctions.

**Space of measurement.** In recorded relationships, safety awareness is linked to one measurement instrument, SIUO, and one behavioral indicator, Harmful content detection, although only SIUO is recorded as measuring it. One paper explicitly says safety-awareness assessment uses the SIUO dataset; other snippets operationalize the construct through whether a system seeks confirmation before sensitive actions, its safeguard rate and ability to classify sensitive requests, differences of ASR across categories, whether it avoids suspicious pop-ups, and whether probes find clear separation between safe and toxic inputs. These operationalizations span action-level behavior, output-level safety, and internal representations rather than a single uniform measure.

**Links.** One paper claims a causal relationship from Harmful content detection to safety awareness, stating that improved capability in identifying unsafe intent enhances safety performance on safety-awareness benchmarks. One paper reports that safety awareness is measured by SIUO, and one paper says safety alignment is related to safety awareness in tasks described as challenging multimodal reasoning and safety alignment capabilities.

## Sources

**[SafetyQuizzer: Timely and Dynamic Evaluation on the Safety of LLMs](https://aclanthology.org/2025.naacl-long.85.pdf)**
> The latent disposition to recognize and handle sensitive or potentially harmful actions by seeking user confirmation before execution.

**[Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://proceedings.iclr.cc/paper_files/paper/2024/file/7274ed909a312d4d869cc328ad1c5f04-Paper-Conference.pdf) (as "Risk awareness")**
> The latent ability of an LM agent to recognize potentially dangerous situations and respond appropriately, such as by seeking user confirmation before executing high-stakes actions.

## Relationships

### Safety awareness →
- **SIUO** (measurements) — *measured_by*
  > For assessment of safety-awareness, we employ SIUO (Wang et al., 2025) and MSS-Bench (Zhou et al., 2024) datasets... (Section 2.1).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)

### → Safety awareness
- **Harmful content detection** (behaviors tasks) — *causes*
  > MLRMs paradoxically enhances safety performance via long reasoning on safety-awareness benchmarks, due to improved capability in identifying unsafe intent (Section 2.2).
  - [Think in Safety: Unveiling and Mitigating Safety Alignment Collapse in Multimodal Large Reasoning Model](https://aclanthology.org/2025.emnlp-main.261.pdf)
