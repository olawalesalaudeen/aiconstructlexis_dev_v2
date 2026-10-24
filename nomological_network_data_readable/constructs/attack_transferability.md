# Attack transferability
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Strategy transferability, Super transferability  

## State of the Field

**Definition agreement:** Complementary. Most papers define attack transferability as an attack or jailbreak developed in one setting remaining effective against other target models, and one of these also extends the scope to attacker models or datasets. A few papers broaden this to a single perturbation working across samples, domains, models, and tasks, so the definitions foreground different scopes of the same phenomenon: attack effectiveness carrying over beyond the original setting.

**Space of definitions.** Across the surveyed work, the common thread is persistence of attack effectiveness across changes in model or setting. One line defines it as prompt-level or embedding-level attacks developed for one model remaining effective on other models, with examples stating that generated attack prompts may transfer to GPT-4 and that embedding-level attacks may transfer to other white-box LLMs that share commonalities in their safety mechanisms. Other papers shift both the transferred object and the scope: one defines transferability as jailbreak strategies staying effective across target models, attacker models, or datasets, while another defines "super transferability" as a single perturbation working across data samples, domains, models, and tasks simultaneously.

**Space of facets.** Papers organize the concept mainly by what is transferred and across which dimensions it transfers. Some distinguish prompt-level from embedding-level transfer, some treat transferability at the level of a learned strategy library, and one uses a stronger subtype, "super transferability," for a single perturbation that achieves cross-data, cross-domain, cross-model, and cross-task transfer at once. Across these uses, the same family of terms covers both model-to-model attack transfer and broader generalization across datasets, domains, or tasks.

**Space of measurement.** Operationalization is sparse: papers link the construct to 1 measurement instrument and no behavioral indicators. The only linked instrument is HarmBench, used in the strategy-transferability framing by fixing the strategy library without any updates and measuring HarmBench ASR, labeled Pre-ASR. Among the linked measurements, this is the only explicit operationalization, so the measured use centers on whether a fixed jailbreak strategy library maintains attack success across settings.

## Sources

**[Uncovering Safety Risks of Large Language Models through Concept Activation Vector](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3a230d716e65afab578a8eb31a8d25f-Paper-Conference.pdf)**
> The extent to which attacks, either at the prompt or embedding level, developed for one model are effective against other models, suggesting shared vulnerabilities in their safety mechanisms.

**[AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1bff3663270ba47f801e917f782d7935-Paper-Conference.pdf) (as "Strategy transferability")**
> The extent to which discovered jailbreak strategies remain effective across different target models, attacker models, or datasets.

**[X-Transfer Attacks: Towards Super Transferable Adversarial Attacks on CLIP](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25h/huang25h.pdf) (as "Super transferability")**
> A property of an adversarial attack where a single perturbation is effective across different data samples, domains, models, and tasks simultaneously.

## Relationships

### Attack transferability →
- **HarmBench** (measurements) — *measured_by*
  > “we test if the strategy library can be directly used without any updates, by fixing the strategy library and measuring the Harmbench ASR (noted as Pre-ASR).”
  - [AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1bff3663270ba47f801e917f782d7935-Paper-Conference.pdf)

### → Attack transferability
- **Model similarity** (constructs) — *causes*
  > “Building on previous work suggesting that aligning white-box and target models in the safety domain can improve the transferability of adversarial prompts”
  - [Stealthy Jailbreak Attacks on Large Language Models via Benign Data Mirroring](https://aclanthology.org/2025.naacl-long.88.pdf)

### Associated with
- **Jailbreaking** (behaviors tasks)
  > We evaluate each suffix on all 50 behaviors (universality) including the one it is directly optimized for and on all five target models (transferability) including the one it is optimized on. (Section 3.1)
  - [Stronger Universal and Transferable Attacks by Suppressing Refusals](https://aclanthology.org/2025.naacl-long.302.pdf)
