# Out-of-distribution detection
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** OOD detection  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is the task of deciding whether an input sample falls outside the training distribution, and one study also describes it as a benchmark for assessing uncertainty-aware methods. The definitions agree on this core formulation, and the fuller version adds a success criterion based on uncertainty: an effective approach should "reliably assign higher uncertainties to OOD samples compared to ID samples," while a shorter formulation describes it simply as identifying samples that do not belong to the training distribution.

**Variants.** Papers use both the full name and the abbreviation "OOD detection." The studied settings vary in what counts as out-of-distribution: some treat other datasets as OOD relative to an in-distribution training set, another evaluates on external OOD datasets including SVHN, and another treats Samoan translations of TQA statements as an "out-of-distribution language"; one paper also places the task in both pre-training and fine-tuning stages.

**Space of elicitation and scores.** Papers link it to five measurement instruments: ARC-Challenge, ARC-Easy, CommonsenseQA, SVHN, and TQA. In the reported uses, these are introduced as OOD datasets or test conditions: one setup fine-tunes on OBQA as the in-distribution dataset and tests on ARC-Challenge, ARC-Easy, and CommonsenseQA as OOD datasets, another validates on external OOD datasets including SVHN, and another repeats the experiment on Samoan translations for TQA.

**What it is taken as evidence of.** The recorded construct links are causal claims directed toward the behavior, not claims that the behavior measures a construct. Papers link it to two constructs in this way: one paper claims a causal relationship from Epistemic uncertainty to out-of-distribution detection, saying it provides "an improved indicator for out-of-distribution detection," and another claims a causal relationship from Visual understanding to out-of-distribution detection, arguing that insufficient image interpretation capabilities limit the ability to distinguish between in-distribution and OoD inputs.

## Sources

**[Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)**
> The observable task of identifying whether a given input sample comes from a different data distribution than the one the model was trained on, typically by assigning it a higher uncertainty score.

**[Adapting Multi-modal Large Language Model to Concept Drift From Pre-training Onwards](https://proceedings.iclr.cc/paper_files/paper/2025/file/e25d87b8a42ee3f0d5b3ef741ca13031-Paper-Conference.pdf) (as "OOD detection")**
> The task of identifying input samples that do not belong to the training distribution.

## Relationships

### Out-of-distribution detection →
- **CommonsenseQA** (measurements) — *measured_by*
  > We fine-tune the LLMs on OBQA (as the ID dataset) and test them on ARC-C, ARC-E, and CSQA (as OOD dataset).
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **SVHN** (measurements) — *measured_by*
  > The model is trained on CIFAR100-LT Krizhevsky & Hinton (2009) with an imbalance ratio of 100, and validated on external OOD datasets including SVHN Netzer et al. (2011), Places365 Zhou et al. (2017), LSUN Yu et al., iSUN Xu et al. and Texture Cimpoi et al. (2014). (Section 3)
  - [Adapting Multi-modal Large Language Model to Concept Drift From Pre-training Onwards](https://proceedings.iclr.cc/paper_files/paper/2025/file/e25d87b8a42ee3f0d5b3ef741ca13031-Paper-Conference.pdf)

### → Out-of-distribution detection
- **Visual understanding** (constructs) — *causes*
  > We found that one of the reasons for this discrepancy is the insufficient image interpretation capabilities of these models, which limits their ability to accurately distinguish between ID and OoD inputs. (Section 1)
  - [Reflexive Guidance: Improving OoDD in Vision-Language Models via Self-Guided Image-Adaptive Concept Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/f8b78c39a262ea563ee51d2f6dba3b04-Paper-Conference.pdf)

### Associated with
- **Epistemic uncertainty** (constructs)
  > “epistemic uncertainty providing an improved indicator for out-of-distribution detection.”
  - [Scalable Bayesian Learning with posteriors](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f9f4ff2ebebb298d88e3fe0e10162db-Paper-Conference.pdf)
