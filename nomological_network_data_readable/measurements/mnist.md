# MNIST
**Type:** Measurement  
**Referenced in:** 16 papers  

## State of the Field

**What it is.** Across papers, the dominant framing is of MNIST as a benchmark or classification dataset for handwritten digits. Most descriptions treat it as a handwritten digit recognition or image classification benchmark, while some position it more narrowly as a dataset for controlled finetuning experiments, shallow-network training and evaluation, or robust hyperparameter optimization. A smaller usage treats it as a test of digit recognition and number comprehension from images, with one study noting that models "struggle on simple digit recognition and counting tasks, e.g. MNIST."

**What it is claimed to measure.** Papers link MNIST to 3 constructs and 1 behavioral indicator. The reported measurement claims are spread across image classification, optical character recognition ability, model collapse, and visual perception, rather than concentrated on one target. In these accounts, papers use it to measure image classification, to assess "the models’ ability to identify digits and count objects within images" for optical character recognition ability, to measure model collapse in experiments with shallow networks fully trained on MNIST, and to test visual perception.

**Space of uses.** The common use is as a standard benchmark inside broader experimental suites. Papers place it in controlled finetuning setups such as "a multilayer perceptron on MNIST," in BadNets backdoor evaluations, in digit recognition tasks for robust hyperparameter optimization, and in multi-domain classification evaluations; some use it alongside Fashion-MNIST, CIFAR10, or CIFAR-10/100. No measurement instrument is linked to it.

## Sources

**[Demystifying Poisoning Backdoor Attacks from a Statistical Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/4488bf8354049b1cd592b6418dc30466-Paper-Conference.pdf)**
> A classification dataset used in the paper's controlled finetuning experiments.

## Relationships

### → MNIST
- **Image classification** (behaviors tasks) — *measured_by*
  > We consider models trained on the MNIST dataset of handwritten digits and the Fashion-MNIST dataset of clothing images.
  - [Bilinear MLPs enable weight-based mechanistic interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7504142a20a3e1fe9dd7de42f475828c-Paper-Conference.pdf)
- **Optical character recognition ability** (constructs) — *measured_by*
  > Counting and Character Recognition: Assessing the models' ability to identify digits and count objects within images, a fundamental skill for quantitative understanding. ... including decades old benchmarks such as MNIST and SVHN [LeCun et al., 1998, Netzer et al., 2011].
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Model collapse** (constructs) — *measured_by*
  > Our theoretical results are empirically confirmed with experiments in: • Toy settings, including random projections model on Gaussian data, and shallow networks fully trained on the MNIST dataset (Deng, 2012). (Section 1.1)
  - [Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > The perception capability is tested on CIFAR-10/100 (Krizhevsky et al., 2009) and MNIST (Deng, 2012). (Section 4.1)
  - [Re-Imagining Multimodal Instruction Tuning: A Representation View](https://proceedings.iclr.cc/paper_files/paper/2025/file/dcf88cbc8d01ce7309b83d0ebaeb9d29-Paper-Conference.pdf)
