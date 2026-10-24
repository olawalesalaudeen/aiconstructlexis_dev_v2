# Label noise robustness
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Robustness to noisy labels, Robustness to noisy textual descriptions, Robustness to noise, Robustness to label noise  

## State of the Field

**Definition agreement:** Consensus. Most papers define label noise robustness as a model's ability to keep its performance stable when the supervision signal contains errors, such as corrupted labels, noisy captions, flawed annotations, or inaccurate self-generated data. The differences are mainly the learning setting and type of noisy supervision being discussed, not a different underlying phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats label noise robustness as keeping performance stable when supervision is noisy or corrupted, most often through mislabeled or synthetic label noise in training data. One paper makes this concrete as having the lowest relative drop in performance compared with training on clean data. A smaller line of work extends the same framing to noisy textual descriptions, dialogue annotations or input formulations, noisy in-context demonstrations, and self-generated data with errors, and some of these definitions narrow the outcome to compositional performance or to continuing the self-improvement process.

**Space of facets.** Instead of a shared subtype taxonomy, papers apply the term across several noise sources and learning settings. The main distinctions in use are between corrupted training labels, noisy captions or textual supervision, annotation or input noise, incorrect labels in demonstrations, and errors in self-generated training data. Some authors also tie the construct to a specific target, either maintaining compositional performance or preserving a self-improvement process under noisy training signals.

**Space of measurement.** Operationalization is sparse in the recorded links: the construct is linked to one measurement instrument, CIFAR-10, and to no behavioral indicators or other constructs. In that operationalization, robustness is assessed by randomly flipping labels in the dataset and comparing performance against clean-data training, which lines up with the common definitions centered on corrupted labels. No additional linked instrument is recorded for versions of the construct based on noisy textual descriptions, dialogue annotations, in-context demonstrations, or self-generated data.

**Links.** No papers in the recorded relationships claim causal, correlational, or other related-construct links for this construct. The only explicit link is that it is measured by CIFAR-10.

## Sources

**[Repeated Random Sampling for Minimizing the Time-to-Accuracy of Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/68b8d2bc77268facfc75a78782da9559-Paper-Conference.pdf) (as "Robustness to noisy labels")**
> The degree to which model performance degrades minimally when training labels are corrupted or mislabeled.

**[Causal Graphical Models for Vision-Language Compositional Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9a17133e3943509243b5e197c1c23b2-Paper-Conference.pdf) (as "Robustness to noisy textual descriptions")**
> The degree to which a model maintains compositional performance when captions or textual supervision are noisy.

**[Mitigating Shortcut Learning with InterpoLated Learning](https://aclanthology.org/2025.acl-long.450.pdf) (as "Robustness to noise")**
> The resilience of a model's performance in the presence of synthetic label noise in the training data, indicating stability in learning despite data imperfections.

**[Self-Improving Transformers Overcome Easy-to-Hard and Length Generalization Challenges](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25d/lee25d.pdf) (as "Robustness to label noise")**
> The model's ability to maintain performance and continue the self-improvement process even when trained on self-generated data that contains a certain amount of errors or inaccuracies.

## Relationships

### Label noise robustness →
- **CIFAR-10** (measurements) — *measured_by*
  > For this experiment, we use CIFAR10 and randomly flip p percentage of the labels in the dataset—we vary p in {10%, 30%, 50%}.
  - [Repeated Random Sampling for Minimizing the Time-to-Accuracy of Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/68b8d2bc77268facfc75a78782da9559-Paper-Conference.pdf)

### → Label noise robustness
- **Flatness** (constructs) — *causes*
  > This aligns well with previous observations that sharpness-minimization can enhance robustness toward label noise (Baek et al., 2024). (4.4. Robustness to Noisy Data)
  - [SAFE: Finding Sparse and Flat Minima to Improve Pruning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25s/lee25s.pdf)
