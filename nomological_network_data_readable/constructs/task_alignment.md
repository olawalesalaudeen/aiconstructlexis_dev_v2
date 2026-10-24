# Task alignment
**Type:** Construct  
**Referenced in:** 6 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the surveyed work, a recurring framing describes task alignment as the model's ability to adapt its outputs to the specific constraints and goals of a new, ad-hoc task. Another distinct framing defines it as the degree to which a model's internal representations correspond to a downstream task's requirements, with one paper locating this especially in deeper or later layers. The main disagreement is therefore about whether task alignment is described at the level of outputs and task fulfillment or at the level of internal representations.

**Space of facets.** Papers do not present an elaborate subtype scheme, but they place the construct in different conceptual neighborhoods. One paper equates following task-specific instructions and demonstrations with in-context learning ability, explicitly relating that ability to task alignment, while another uses the term for alignment of task-specific representations toward output layers. Another paper also discusses fine-grained style and task alignment across domains such as news articles, emails, and blog posts.

**Space of measurement.** Papers link task alignment to no measurement instrument and no behavioral indicator. Its operationalization is therefore mostly described rather than formalized: one paper evaluates whether a model can learn fine-grained task alignment across domains, and another reports layer-wise probing results that indicate improved task alignment in deeper layers and toward output layers. These operationalizations track the two definitions already in use, one centered on adapting outputs to task demands and another on task-specific internal representations.

**Links.** Task alignment is linked to three constructs. One paper claims a causal relationship from task alignment to knowledge forgetting, stating that spurious forgetting is caused by the loss of task alignment rather than underlying knowledge, and another claims a causal relationship from task alignment to robustness by saying that enforcing task alignment achieves a better robustness-utility tradeoff. A separate paper reports a related link from in-context learning to task alignment, describing alignment as the ability to follow task-specific instructions and demonstrations, that is, in-context learning ability.

## Sources

**[Aligning Language Models with Demonstrated Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/349a45f211fb1b3850da1ccd829e869e-Paper-Conference.pdf)**
> The model's ability to adapt its outputs to meet the specific constraints and goals of a new, ad-hoc task.

## Relationships

### Task alignment →
- **Knowledge forgetting** (constructs) — *causes*
  > We find that spurious forgetting is caused by the loss of task alignment instead of underlying knowledge (Section 1).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **Robustness** (constructs) — *causes*
  > Our approach, instead, aims to enforce the task alignment, achieving a better robustness-utility tradeoff. (Section 6)
  - [The Task Shield: Enforcing Task Alignment to Defend Against Indirect Prompt Injection in LLM Agents](https://aclanthology.org/2025.acl-long.1435.pdf)
- **Layer-wise probing** (measurements) — *measured_by*
  > Layer-wise probing further indicates significant improvements in task alignment, especially within deeper LM layers, highlighting stable generalization even for previously unseen scenarios with increased planning complexity—conditions where baseline methods degrade markedly. (Abstract)
  - [Growing Through Experience: Scaling Episodic Grounding in Language Models](https://aclanthology.org/2025.acl-long.409.pdf)

### Associated with
- **In-context learning** (constructs)
  > The alignment refers to the model’s ability to follow task-specific instructions and demonstrations, i.e., its in-context learning ability. (Section 2)
  - [Targeted Distillation for Sentiment Analysis](https://aclanthology.org/2025.emnlp-main.1127.pdf)
