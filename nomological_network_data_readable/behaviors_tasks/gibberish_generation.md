# Gibberish generation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Nonsensical response generation, Incoherent output, Garbage text generation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage describes it as the model producing incoherent, meaningless, irrelevant, unreadable, or otherwise un-useful text. Definitions largely agree on observable forms such as jumbled or repetitive phrases, random characters, mixed languages, garbled characters, and semantically irregular text; one paper describes single phrases or words repeated 'ad nauseum.' In the trigger-based framing, success is defined as eliciting gibberish outputs from the model when the trigger appears.

**Variants.** Papers use several near-synonymous names for the behavior, including incoherent output, nonsensical response generation, and garbage text generation. The studied settings differ: some elicit it when a specific trigger string is present in context, some when the model is asked to operate in a difficult bijection language, and some after extensive optimization on a proxy reward or under KL-divergence training. A narrower variant emphasizes garbage text specifically as mixed languages or garbled characters.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead describe elicitation through context conditions, such as a trigger string or a difficult bijection language, and one scoring scheme assigns a -1 reward to responses marked as garbage text, including mixed languages or garbled characters.

**What it is taken as evidence of.** No construct is linked as something this behavior indicates. Separately, one paper claims a causal relationship from Reward hacking to Gibberish generation, stating that optimizing a learned reward function over outputs eventually leads to nonsensical responses.

## Sources

**[Endless Jailbreaks with Bijection Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b05c1fb3345743dea59f500ec5a0bba0-Paper-Conference.pdf) (as "Incoherent output")**
> Producing jumbled, meaningless, or repetitive text when asked to operate in a difficult bijection language.

**[Correlated Proxies: A New Definition and Improved Mitigation for Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/dbe2cfe4767f3255160b73a36ae3162e-Paper-Conference.pdf) (as "Nonsensical response generation")**
> The model produces outputs that are incoherent, irrelevant, or nonsensical, particularly after extensive optimization on a proxy reward.

**[Persistent Pre-training Poisoning of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/4dade38eae8c007f3a564b8ea820664a-Paper-Conference.pdf)**
> The observable behavior of a model producing nonsensical or un-useful text, often consisting of random characters, when a specific trigger is present.

**[T1: Advancing Language Model Reasoning through Reinforcement Learning and Inference Scaling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hou25e/hou25e.pdf) (as "Garbage text generation")**
> An undesirable behavior where the model produces incoherent, unreadable, or semantically irregular output, such as mixed languages or garbled characters.

## Relationships

### → Gibberish generation
- **Reward hacking** (behaviors tasks) — *causes*
  > In RLHF, optimizing a learned reward function over LLM outputs eventually leads to the LLM producing nonsensical responses Stiennon et al. (2020). (Section 3).
  - [Correlated Proxies: A New Definition and Improved Mitigation for Reward Hacking](https://proceedings.iclr.cc/paper_files/paper/2025/file/dbe2cfe4767f3255160b73a36ae3162e-Paper-Conference.pdf)
