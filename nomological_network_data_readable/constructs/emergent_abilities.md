# Emergent abilities
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Emergent capabilities, Emergence  

## State of the Field

**Definition agreement:** Complementary. Most papers define emergent abilities as new or latent model capabilities that become visible in larger models, often describing them as sharp threshold-like jumps in task performance with scale. Several others broaden this to open-world, multimodal, or prompting-dependent behaviors, and a lone outlier ties it to collaborative search, so the papers mostly describe the same model-capability phenomenon but emphasize different aspects and settings rather than using one identical definition.

**Space of definitions.** Across papers, the prevailing usage treats emergent abilities as threshold-like changes in task performance with scale: performance stays near chance or improves only slightly in smaller models, then improves sharply or discontinuously beyond a size or pretraining-compute threshold, with capabilities not seen in smaller models. A recurring alternative framing describes them more broadly as latent or qualitatively new abilities in larger, more advanced, or aligned models, including humor interpretation, creative generation, instruction following, few-shot learning, and complex reasoning, without always requiring a sharp threshold. More specialized definitions narrow the term to open-world multimodal and compositional behavior, or make emergence stricter by requiring simultaneous discontinuities across multiple tasks together with learning of underlying data-generating regularities.

**Space of facets.** Papers do not systematize the term in one way, and several nearby labels are used, including emergent abilities, emergent capabilities, and emergence. One line distinguishes a stricter form in which a capability must show discontinuous improvement on a required task, simultaneous jumps across multiple tasks, and correlation with learning the data-generating regularities. Other papers use the term for specific forms such as open-world multimodal and compositional behavior, instruction following, chain-of-thought and in-context few-shot learning, or correctness emergence (C-emerge), and some also use it as a label for zero-shot task transfer and few-shot learning.

**Space of measurement.** Papers link emergent abilities to 3 measurement instruments and 1 behavioral indicator. The linked instruments are all benchmarks, ARC-Easy, BIG-bench, and MMLU: ARC-Easy is described as testing basic science knowledge and fundamental reasoning, MMLU is used through scaling trends of accuracy, and BIG-bench through datasets showing U-shaped versus inverted-U scaling. Papers also link it to multiple-choice question answering as the lone behavioral indicator, with one paper saying emergent abilities mainly happen on string-match and multiple-choice tasks; overall, these operationalizations make the construct concrete as benchmark performance patterns, which matches the threshold-style definitions more directly than the definitions centered on open-world multimodal behavior or newly surfaced skills.

**Links.** Papers relate emergent abilities to zero-shot generalization and in-context learning: one source treats zero-shot task transfer and few-shot learning as examples sometimes known as emergent abilities, and another describes in-context learning as an emergent ability improved by MUDDFormer. A separate paper relates emergent abilities to multiple-choice question answering, reporting that they mainly happen on string-match and multiple-choice tasks.

## Sources

**[Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)**
> The phenomenon where a model's performance on specific tasks appears to improve dramatically and unpredictably once it surpasses a certain size threshold, manifesting capabilities not observed in smaller models.

**[Training on the Test Task Confounds Evaluation and Emergence](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab8c971c2ccd12bac0ab249f75e2c16d-Paper-Conference.pdf) (as "Emergent capabilities")**
> The phenomenon where a model's performance on a task remains near random chance up to a certain scale of pretraining compute, after which it improves sharply.

**[A Percolation Model of Emergence: Analyzing Transformers Trained on a Formal Language](https://proceedings.iclr.cc/paper_files/paper/2025/file/5cd2b0a6b7423af6369cbdbbb228e8d0-Paper-Conference.pdf) (as "Emergence")**
> A phenomenon characterized by sudden performance improvement on a task, simultaneous improvement across multiple tasks, and a correlation with the model learning underlying data-generating regularities.

## Relationships

### Emergent abilities →
- **ARC-Easy** (measurements) — *measured_by*
  > These benchmarks assess different aspects of LLM emergent abilities: Lambada evaluates contextual comprehension... ARC-easy tests basic science knowledge and fundamental reasoning
  - [Neuron-based Multifractal Analysis of Neuron Interaction Dynamics in Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6158e152498f8d8b83d14388a7ec1963-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > Fig. 1a–3a show the scaling trend of accuracy on the MMLU, Persian-QA, and arithmetic datasets, with clear ability emergence demonstrated.
  - [U-shaped and Inverted-U Scaling behind Emergent Abilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f696200311b445af686c3ebd87ade1d7-Paper-Conference.pdf)
- **BIG-bench** (measurements) — *measured_by*
  > Fig. 4 shows U-shaped and inverted-U scaling on 6 datasets exhibiting emergent abilities... Except for MMLU, the other 5 tasks are from Big-Bench.
  - [U-shaped and Inverted-U Scaling behind Emergent Abilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f696200311b445af686c3ebd87ade1d7-Paper-Conference.pdf)

### → Emergent abilities
- **Scalability** (constructs) — *causes*
  > current diffusion models still face a scalability dilemma, which will play an important role in determining whether could support scalable deep generative training on large-scale vision data and give rise to emergent abilities [40] similar to large language models (LLMs) (Introduction).
  - [Neural Residual Diffusion Models for Deep Scalable Vision Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/d51ceadaf09a4699f18986702df24987-Paper-Conference.pdf)

### Associated with
- **Multiple-choice question answering** (behaviors tasks)
  > Schaeffer et al. (2024a) finds that emergent abilities mainly happen on string-match and multiple-choice tasks (Schaeffer et al., 2024a), for which traditional performance measures exhibit strong discontinuity. (Sec. 1)
  - [U-shaped and Inverted-U Scaling behind Emergent Abilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f696200311b445af686c3ebd87ade1d7-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs)
  > Examples include zero-shot task transfer (Radford et al., 2021) and few-shot learning (Brown et al., 2020). This is sometimes known as the emergent abilities of LLMs (Section 2).
  - [Wav2Prompt: End-to-End Speech Prompt Learning and Task-based Fine-tuning for Text-based LLMs](https://aclanthology.org/2025.naacl-long.354.pdf)
- **In-context learning** (constructs)
  > It significantly outperforms Transformer baselines in language and vision tasks and improves emergent abilities such as in-context learning with minimal overhead. (Section 5).
  - [MUDDFormer: Breaking Residual Bottlenecks in Transformers via Multiway Dynamic Dense Connections](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25d/xiao25d.pdf)
