# Cross-domain generalization
**Type:** Construct  
**Referenced in:** 37 papers  
**Also known as:** Generalization to unseen targets, Domain transfer, Cross-domain generalizability, Domain generalization, Cross-domain transfer, Cross-domain adaptability, Out-of-domain generalization, Domain transferability, Cross-platform generalization  

## State of the Field

**Definition agreement:** Consensus. Most papers define cross-domain generalization as a model trained in one source domain being able to transfer knowledge and maintain effective performance in a different, unseen domain, topic, platform, or distribution. A few papers narrow this to particular transferred content such as preferences, safety patterns, or representations, but they still describe the same core property of preserving capability across domains rather than a different phenomenon.

**Space of definitions.** Across papers, the prevailing usage is a model's ability to transfer learned knowledge or maintain performance when training and evaluation come from different domains, topics, targets, prompt distributions, or environments. Most definitions emphasize unseen or held-out settings, such as targets not encountered during training, websites or query settings not seen in training, or movement from one task domain to another. A smaller line of work narrows the transferred object, describing the generalization of learned preferences and concept importance, optimized safety checks and risk patterns, or representations learned from speech and music to bioacoustics. The main variation is therefore in what counts as a domain and in whether the construct is framed as overall task performance or as the transfer of particular learned components.

**Space of facets.** Rather than a single taxonomy, papers use several near-synonymous labels for closely related uses, including domain transfer, cross-domain transfer, cross-domain adaptability, out-of-domain generalization, domain transferability, and cross-platform generalization. Under these labels, the domain boundary is instantiated in different ways: topics, social-media targets, prompt distributions, document types, recommendation contexts, websites and query settings, operating systems, and broad task families such as math, code generation, and language understanding. Some papers also describe it in zero-shot terms, such as cross-domain zero-shot or evaluation on unseen domains, while another explicitly relates it to broader generalization.

**Space of measurement.** Papers link the construct to 7 measurement instruments and 1 behavioral indicator overall. The recorded operationalizations are benchmark or dataset evaluations, with ALFWorld, BIRD, CrossNER, LEMON, and Spider listed most often, alongside other instruments; the linked behavioral indicator does not appear as a measure in the recorded relationships. These evaluations operationalize the construct through unseen domains, disjoint train and test databases, or held-out domains, so they mostly line up with the dominant definitions of transfer across domains.

**Links.** In the recorded relationships, separate papers claim causal relationships from Prompt robustness, General reasoning, and Schema linking to this construct. Other papers treat it as related to Generalization and to Zero-shot generalization. No correlational relationship is recorded.

## Sources

**[ViClaim: A Multilingual Multilabel Dataset for Automatic Claim Detection in Videos](https://aclanthology.org/2025.emnlp-main.21.pdf) (as "Domain transfer")**
> The capability of a model trained on a set of source domains or topics to perform effectively on a different target domain or topic.

**[T-MAD: Target-driven Multimodal Alignment for Stance Detection](https://aclanthology.org/2025.emnlp-main.30.pdf) (as "Generalization to unseen targets")**
> The model's ability to accurately detect stances toward targets not encountered during training, reflecting adaptability to novel topics in social media discourse.

**[PAFT: Prompt-Agnostic Fine-Tuning](https://aclanthology.org/2025.emnlp-main.37.pdf)**
> The ability of a model to transfer knowledge and performance from one domain or prompt distribution to another, particularly when training and test prompts differ significantly.

**[Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf) (as "Cross-domain generalizability")**
> The capacity of a model to maintain or transfer reasoning performance across fundamentally different task domains after specialized training.

**[Multi-Domain Explainability of Preferences](https://aclanthology.org/2025.emnlp-main.736.pdf) (as "Domain generalization")**
> The degree to which a model's learned preferences and concept importance generalize across different domains, capturing both shared patterns and domain-specific deviations.

**[M-ABSA: A Multilingual Dataset for Aspect-Based Sentiment Analysis](https://aclanthology.org/2025.emnlp-main.128.pdf) (as "Cross-domain transfer")**
> The ability of a model to apply knowledge learned in one specific domain to perform tasks in a different, unseen domain.

**[RecGPT: A Foundation Model for Sequential Recommendation](https://aclanthology.org/2025.emnlp-main.513.pdf) (as "Cross-domain adaptability")**
> The model's inherent capability to transfer knowledge and maintain performance across different recommendation contexts and platforms, such as e-commerce, games, and social media.

**[WebEvolver: Enhancing Web Agent Self-Improvement with Co-evolving World Model](https://aclanthology.org/2025.emnlp-main.454.pdf) (as "Out-of-domain generalization")**
> The ability to transfer web-agent performance to websites or query settings not seen during training.

**[AGrail: A Lifelong Agent Guardrail with Effective and Adaptive Safety Detection](https://aclanthology.org/2025.acl-long.399.pdf) (as "Domain transferability")**
> The extent to which optimized safety checks and learned risk patterns generalize from one task domain to another without performance degradation.

**[Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ca0e369689dadb25a5345ba9755ad6f-Paper-Conference.pdf) (as "Cross-platform generalization")**
> The degree to which a model's performance transfers across different operating systems and environments (web, desktop, mobile) without specific training on all platforms.

## Relationships

### Cross-domain generalization →
- **VATEX** (measurements) — *measured_by*
  > we evaluate both the VATEX validation set and the generation benchmark on YDC, which are of nearly the same scale. This dual evaluation aims to assess the cross-domain generalization capabilities of the training results (Section 6).
  - [Youku Dense Caption: A Large-scale Chinese Video Dense Caption Dataset and Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f3cbee17170c3ffff3e413d2df54f6b-Paper-Conference.pdf)
- **CrossNER** (measurements) — *measured_by*
  > CrossNER provides datasets that spans multiple domains... which is suited for evaluating zero-shot NER tasks. (Section 4.2)
  - [Handling Missing Entities in Zero-Shot Named Entity Recognition: Integrated Recall and Retrieval Augmentation](https://aclanthology.org/2025.naacl-long.540.pdf)
- **LEMON** (measurements) — *measured_by*
  > Notably, LEMON includes test sets from seven different domains but does not provide in-domain training sets, making it an ideal benchmark for evaluating a model’s cross-domain generalization capability. (Section 4.1)
  - [Mixture of Small and Large Models for Chinese Spelling Check](https://aclanthology.org/2025.acl-long.1372.pdf)
- **VirtualHome** (measurements) — *measured_by*
  > We evaluate our WorMI on the VirtualHome and ALFWorld benchmarks, demonstrating superior zero-shot and few-shot performance compared to several LLM-based approaches across a range of unseen domains. These results highlight the framework’s potential for scalable, real-world deployment in embodied agent scenarios where adaptability and data efficiency are essential. (Abstract).
  - [World Model Implanting for Test-time Adaptation of Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yoo25a/yoo25a.pdf)
- **ALFWorld** (measurements) — *measured_by*
  > We evaluate our WorMI on the VirtualHome and ALFWorld benchmarks, demonstrating superior zero-shot and few-shot performance compared to several LLM-based approaches across a range of unseen domains. These results highlight the framework’s potential for scalable, real-world deployment in embodied agent scenarios where adaptability and data efficiency are essential. (Abstract).
  - [World Model Implanting for Test-time Adaptation of Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yoo25a/yoo25a.pdf)
- **Spider** (measurements) — *measured_by*
  > Benchmarks like Spider(Yu et al., 2019) and BIRD(Li et al., 2023b) evaluate cross-domain generalization, where training and test databases are disjoint. (Section 1)
  - [GenLink: Generation-Driven Schema-Linking via Multi-Model Learning for Text-to-SQL](https://aclanthology.org/2025.emnlp-main.1518.pdf)
- **BIRD** (measurements) — *measured_by*
  > Benchmarks like Spider(Yu et al., 2019) and BIRD(Li et al., 2023b) evaluate cross-domain generalization, where training and test databases are disjoint. (Section 1)
  - [GenLink: Generation-Driven Schema-Linking via Multi-Model Learning for Text-to-SQL](https://aclanthology.org/2025.emnlp-main.1518.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > "we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation."
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **MATH** (measurements) — *measured_by*
  > We find that fine-tuning generalizes perfectly across domains for MATH, which is not very surprising given the near-perfect generalization from few samples to the full distribution in Figure 3. (Section 5.2)
  - [Stress-Testing Capability Elicitation With Password-Locked Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ff97417474268e6b5a38bcbfae04944-Paper-Conference.pdf)
- **InfoBench** (measurements) — *measured_by*
  > "we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation."
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > "we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation."
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **SST-2** (measurements) — *measured_by*
  > To further demonstrate the generalization ability of our method, we conduct cross-domain experiments. We use three sentiment datasets on SST-2 (Socher et al., 2013), IMDb (Maas et al., 2011), FineFood (McAuley and Leskovec, 2013). (Section 4.1)
  - [SALAD: Improving Robustness and Generalization through Contrastive Learning with Structure-Aware and LLM-Driven Augmented Data](https://aclanthology.org/2025.naacl-long.634.pdf)
- **GLUE-X** (measurements) — *measured_by*
  > We focus on domain generalization... To this end, we conduct experiments using GLUE-X (Yang et al., 2023a). (Section 5)
  - [Mitigating Shortcut Learning with InterpoLated Learning](https://aclanthology.org/2025.acl-long.450.pdf)
- **ToxiCloakCN** (measurements) — *measured_by*
  > To further evaluate the generalization capacity of our homophone-aware training strategy under cross-domain settings, we conduct experiments on the ToxiCloakCN dataset as an external benchmark (Xiao et al., 2024). (Section 5.5.5)
  - [Enhancing Chinese Offensive Language Detection with Homophonic Perturbation](https://aclanthology.org/2025.emnlp-main.1154.pdf)

### → Cross-domain generalization
- **Schema linking** (behaviors tasks) — *causes*
  > Schema-linking is widely recognized as key to improving generalization by adaptively associating queries with database items. (Section 1)
  - [GenLink: Generation-Driven Schema-Linking via Multi-Model Learning for Text-to-SQL](https://aclanthology.org/2025.emnlp-main.1518.pdf)

### Associated with
- **Zero-shot generalization** (constructs)
  > This critical limitation creates an urgent need for a transformative recommendation paradigm with robust Zero-Shot Generalization capabilities that can adapt seamlessly across diverse scenarios without prior exposure to specific users or items (Section 1)
  - [RecGPT: A Foundation Model for Sequential Recommendation](https://aclanthology.org/2025.emnlp-main.513.pdf)
- **Prompt robustness** (constructs)
  > The capability of PAFT to generalize effectively to unseen prompt formulations can be rigorously understood through the lens of domain adaptation theory... In this theoretical construct, the collection of training prompts Ptrain along with the task-specific training data Dtrain delineates the source domain. Besdies, the set of novel test prompts Ptest, paired with Dtest, represents the target domain (Section 6).
  - [PAFT: Prompt-Agnostic Fine-Tuning](https://aclanthology.org/2025.emnlp-main.37.pdf)
