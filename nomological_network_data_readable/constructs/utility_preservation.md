# Utility preservation
**Type:** Construct  
**Referenced in:** 31 papers  
**Also known as:** General capability preservation, Model performance preservation, Capabilities preservation, Capability preservation, Utility, Tool knowledge retention, Utility retention, Performance retention, Model integrity, Performance preservation  

## State of the Field

**Definition agreement:** Consensus. Most papers define utility preservation as the extent to which a model keeps its original or general performance, knowledge, and capabilities on non-target tasks or data after some targeted intervention such as unlearning, pruning, alignment, editing, or fine-tuning. A few papers specify particular preserved abilities like code generation, tool use, or truthfulness, but these are narrower instances of the same core property rather than different phenomena.

**Space of definitions.** Across the surveyed work, the dominant framing is retention: papers describe utility preservation as the extent to which a model keeps its general performance, knowledge, or capabilities after some targeted intervention. This is usually stated as preserving performance on non-target data, the retain set, general downstream tasks, or the original model's task performance after unlearning, alignment, pruning, editing, steering, detoxification, or fine-tuning. Some definitions narrow the preserved capacity to a particular setting, such as functional code generation under security alignment or use of retained tools after unlearning, and one theoretical account talks about preserving the core capabilities of a reference policy. The main variation is therefore scope, broad general utility versus a more specific retained capability, rather than whether the construct concerns post-intervention retention.

**Space of facets.** Papers often use several near-synonymous labels for the same broad idea, including capability preservation, utility retention, performance preservation, model integrity, and utility. Within that family, the preserved object shifts among general capabilities, core abilities and knowledge, functional correctness, overall efficacy, and a narrower subtype, tool knowledge retention for tools not marked for unlearning. In unlearning work it is also positioned as one desirable property alongside no verbatim memorization, no knowledge memorization, no privacy leakage, scalability, and sustainability, while steering work explicitly contrasts it with model control through a reported trade-off.

**Space of measurement.** Operationally, papers link the construct to 14 measurement instruments and 3 behavioral indicators. The most common instruments are MT-Bench, AlpacaEval, MMLU, GSM8K, and AgentDojo; across papers these are mostly benchmarks for general or benign task performance, knowledge reasoning, conversational ability, downstream tasks, and agent behavior, with several other instruments also used. Some operationalizations are spelled out directly, for example MT-Bench for general capabilities or conversational abilities, MMLU for knowledge reasoning, AlpacaEval for benign or instruction-following utility, and in one case utility is gauged through zero-shot downstream tasks. A smaller part of the literature uses a retain-set knowledge memorization score or a judge-model usefulness score, but the overall pattern stays close to the dominant definition by treating utility preservation as post-intervention performance retention.

**Links.** Papers only occasionally make non-measurement links explicit. One paper claims a causal relationship from truthfulness to utility preservation, reporting that increased truthfulness negatively impacts utility, while another claims a causal relationship from utility preservation to deception, stating that a very useful agent may engage in obfuscation or overt lying. A further paper claims a causal relationship from overrefusal to utility preservation, where stronger refusal behavior raises false rejections and limits utility. Separate papers relate catastrophic forgetting and privacy preservation to utility preservation, and one further paper links it to another behavioral indicator; no correlational link is recorded.

## Sources

**[MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)**
> The extent to which an unlearned model maintains its general performance on data not intended for removal.

**[Theoretical guarantees on the best-of-n alignment policy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beirami25a/beirami25a.pdf) (as "Capability preservation")**
> The extent to which an aligned model retains the core abilities and knowledge of the original reference model from which it was derived.

**[DLP: Dynamic Layerwise Pruning in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25l/chen25l.pdf) (as "Model performance preservation")**
> The ability of a pruned model to retain its original language modeling and downstream task performance despite high sparsity.

**[Reinforced Lifelong Editing for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25an/li25an.pdf) (as "General capability preservation")**
> The ability of a model editing method to maintain the LLM's performance on general downstream tasks while performing targeted knowledge updates.

**[AxBench: Steering LLMs? Even Simple Baselines Outperform Sparse Autoencoders](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25a/wu25a.pdf) (as "Capabilities preservation")**
> The extent to which a steering intervention avoids degrading the model's underlying general abilities while controlling a target concept.

**[Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/b36dc39b319ba6ba2a0fd7601951efb4-Paper-Conference.pdf) (as "Utility")**
> The model's ability to maintain its performance on general downstream tasks after a targeted intervention like detoxification.

**[Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf) (as "Tool knowledge retention")**
> The latent ability of a model to preserve its learned capability to use tools that are not marked for unlearning, maintaining performance on those tools post-unlearning.

**[Adaptive Localization of Knowledge Negation for Continual LLM Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wuerkaixi25a/wuerkaixi25a.pdf) (as "Utility retention")**
> The degree to which an LLM preserves its general knowledge and capabilities on non-target data after undergoing an unlearning process.

**[Let LLM Tell What to Prune and How Much to Prune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25p/yang25p.pdf) (as "Performance retention")**
> The extent to which a pruned model preserves the original model's functional capabilities and accuracy after compression, particularly in language modeling and downstream tasks.

**[Unified Parameter-Efficient Unlearning for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/8d537430e55a283a97e9b6e682e994a3-Paper-Conference.pdf) (as "Model integrity")**
> The degree to which a model maintains its overall performance and efficacy after undergoing unlearning procedures.

**[Router-Tuning: A Simple and Effective Approach for Dynamic Depth](https://aclanthology.org/2025.emnlp-main.99.pdf) (as "Performance preservation")**
> The latent ability of a model to retain its original task performance after undergoing structural or parametric modifications such as layer skipping or fine-tuning.

## Relationships

### Utility preservation →
- **MT-Bench** (measurements) — *measured_by*
  > The utility performance is evaluated on MT-Bench(Zheng et al., 2023), IFEval(Zhou et al., 2023) and GSM8K(Cobbe et al., 2021), along with the benign part of XSTest(Röttger et al., 2024). (Section 1).
  - [Improve Safety Training of Large Language Models with Safety-Critical Singular Vectors Localization](https://aclanthology.org/2025.acl-long.245.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > To measure model utility on benign tasks, we used AlpacaEval (Dubois et al., 2024). (Section 5.1)
  - [Jailbreak Antidote: Runtime Safety-Utility Balance via Sparse Representation Adjustment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/36e3f9e6162d597adada4e0e4fce6861-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > For evaluating utility, we consider MMLU (Hendrycks et al., 2020), GSM8K (Cobbe et al., 2021), and MBPP (Austin et al., 2021) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **GSM8K** (measurements) — *measured_by*
  > For evaluating utility, we consider MMLU (Hendrycks et al., 2020), GSM8K (Cobbe et al., 2021), and MBPP (Austin et al., 2021) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **MUSE** (measurements) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > For evaluating utility, we consider MMLU (Hendrycks et al., 2020), GSM8K (Cobbe et al., 2021), and MBPP (Austin et al., 2021) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **IFEval** (measurements) — *measured_by*
  > The utility performance is evaluated on MT-Bench(Zheng et al., 2023), IFEval(Zhou et al., 2023) and GSM8K(Cobbe et al., 2021), along with the benign part of XSTest(Röttger et al., 2024). (Section 1).
  - [Improve Safety Training of Large Language Models with Safety-Critical Singular Vectors Localization](https://aclanthology.org/2025.acl-long.245.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > “we evaluate capabilities retention on benchmarks including MMLU and Hellaswag”
  - [Improving LLM Safety Alignment with Dual-Objective Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25c/zhao25c.pdf)
- **AgentDojo** (measurements) — *measured_by*
  > Extensive evaluation on the IPI benchmark AgentDojo demonstrates that MELON outperforms SOTA defenses in both attack prevention and utility preservation. (Section 1)
  - [MELON: Provable Defense Against Indirect Prompt Injection Attacks in AI Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25z/zhu25z.pdf)
- **GLUE** (measurements) — *measured_by*
  > “we assessed downstream performance using 6 tests from GLUE”
  - [Reinforced Lifelong Editing for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25an/li25an.pdf)
- **LibriSpeech** (measurements) — *measured_by*
  > For general utility evaluation, we use AIR-Bench Chat..., LibriSpeech (Panayotov et al., 2015), a benchmark dataset of clean read speech for standard ASR tasks, and MELD... (Section 8.1)
  - [SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://aclanthology.org/2025.emnlp-main.734.pdf)
- **MELD** (measurements) — *measured_by*
  > For general utility evaluation, we use AIR-Bench Chat..., LibriSpeech..., and MELD (Poria et al., 2019), an emotion classification benchmark... (Section 8.1)
  - [SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://aclanthology.org/2025.emnlp-main.734.pdf)

### → Utility preservation
- **Forget quality** (constructs) — *correlates*
  > Through the evaluation of four baseline VLM unlearning algorithms within FIUBENCH, we find that all methods remain limited in their unlearning performance, with significant trade-offs between model utility and forget quality.
  - [Benchmarking Vision Language Model Unlearning via Fictitious Facial Identity Dataset](https://proceedings.iclr.cc/paper_files/paper/2025/file/dafb7f4ced9ac559e077fc611d6e96e5-Paper-Conference.pdf)
- **Truthfulness** (constructs) — *causes*
  > Additionally, increase in truthfulness negatively impacts utility (-15%). (Section 1)
  - [AI-LieDar : Examine the Trade-off Between Utility and Truthfulness in LLM Agents](https://aclanthology.org/2025.naacl-long.595.pdf)
- **Overrefusal** (behaviors tasks) — *causes*
  > for benign inputs, such reinforcement of refusal behavior significantly increases the risk of false rejections, limiting the model’s overall utility
  - [AdaSteer: Your Aligned LLM is Inherently an Adaptive Jailbreak Defender](https://aclanthology.org/2025.emnlp-main.1248.pdf)

### Associated with
- **Computational efficiency** (constructs)
  > Thus, a critical challenge remains: how to effectively reduce inference computation without sacrificing model performance? (Section 1)
  - [Masks Can be Learned as an Alternative to Experts](https://aclanthology.org/2025.acl-long.768.pdf)
- **Privacy preservation** (constructs)
  > For DP-based solutions, although they yield better efficiency but faces the trade-off between privacy and utility. (Section 2)
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
- **Knowledge memorization** (constructs)
  > To quantify this, we evaluate the unlearned model’s performance on the retain set using the knowledge memorization metric KnowMem(funlearn, Dretain). (Section 3.1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Deception** (constructs)
  > However, a very useful agent (from the salesman’s perspective) may engage in deceptive practices such as obfuscation and overt lying, as shown in Figure 1. (Section 1)
  - [AI-LieDar : Examine the Trade-off Between Utility and Truthfulness in LLM Agents](https://aclanthology.org/2025.naacl-long.595.pdf)
- **Text generation** (behaviors tasks)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
- **Code generation** (behaviors tasks)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
- **Instruction following ability** (constructs)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
- **Mathematical reasoning** (constructs)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
- **Scalability** (constructs)
  > The performance of GA, NPO, and their regularized variants, measured by utility preservation, degrades with larger forget set sizes (a) and sequential unlearning requests (b). (Figure 6)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
