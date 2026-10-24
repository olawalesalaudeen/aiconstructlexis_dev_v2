# Optical character recognition ability
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** OCR ability, OCR capability, Fine-grained text recognition, OCR perception, OCR recognition, Character recognition  

## State of the Field

**Definition agreement:** Consensus. Most papers define optical character recognition ability as the capacity to detect, recognize, read, extract, or transcribe text or characters from images or documents. A few papers emphasize particular settings such as query alignment, small or blurred text, or digits and handwriting, but these are variations in scope or examples of the same core phenomenon rather than different constructs.

**Space of definitions.** Across definitions, the prevailing usage treats it as a latent ability to recognize, read, extract, or transcribe text or characters from images or documents. Most papers stay close to this broad OCR framing, using labels such as OCR ability, capability, recognition, or perception, while a smaller line of work narrows it to aligning document text with queries, reading small, blurred, or text-dense content, or identifying digits and handwritten characters. The main variation is between broad text recognition in visual inputs and narrower subcases, and one definition explicitly casts it as a facet of visual perception.

**Space of facets.** Papers do not settle on a single label for the construct and use several near-synonymous names for overlapping scopes. OCR perception is explicitly presented as a facet of visual perception, fine-grained text recognition centers on small or blurred text, and character recognition narrows the focus to digits or characters, including handwritten or natural-image digits. One paper discusses OCR alongside fine-grained and spatial perception, and one paper relates it to document understanding.

**Space of measurement.** Operationalization in the linked work uses 3 measurement instruments, TextVQA, MNIST, and SVHN, and no linked behavioral indicators. TextVQA is used "for OCR abilities", and What matters when building vision-language models adds that it is "the most sensitive benchmark to image resolution"; MNIST and SVHN appear in work that assesses identifying digits and frames character recognition as including handwritten or natural-image digit recognition. These measurements emphasize text or digit recognition, rather than the query-alignment wording used in one definition.

**Links.** One paper reports that Document understanding is related to optical character recognition ability, in the context of training on PDF documents to obtain "strong OCR and document understanding abilities". No paper claims a causal relationship or reports a correlation.

## Sources

**[What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf) (as "OCR ability")**
> The latent capacity to recognize and extract text from images or documents.

**[ColPali: Efficient Document Retrieval with Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/99e9e141aafc314f76b0ca3dd66898b3-Paper-Conference.pdf) (as "OCR capability")**
> The latent ability to recognize and align text present in document images with query terms or document content.

**[Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d2781f7df8825bbde6cef55adfbcd283-Paper-Conference.pdf) (as "Fine-grained text recognition")**
> The latent ability to read and interpret small, blurred, or text-dense visual content in images.

**[ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b69396afc07a9ca3428d194f4db84c02-Paper-Datasets_and_Benchmarks_Track.pdf) (as "OCR perception")**
> The specific facet of visual perception involving the detection and recognition of text characters within an image.

**[Seeing the Image: Prioritizing Visual Correlation by Contrastive Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/37294f033582ac0064bf90fa557c2573-Paper-Conference.pdf) (as "OCR recognition")**
> The ability to accurately identify, read, and transcribe text present within an image.

**[UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Character recognition")**
> The ability to identify digits or characters from visual input, including handwritten or natural-image digit recognition.

## Relationships

### Optical character recognition ability →
- **TextVQA** (measurements) — *measured_by*
  > TextVQA (Singh et al., 2019) for OCR abilities
  - [What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf)
- **MNIST** (measurements) — *measured_by*
  > Counting and Character Recognition: Assessing the models' ability to identify digits and count objects within images, a fundamental skill for quantitative understanding. ... including decades old benchmarks such as MNIST and SVHN [LeCun et al., 1998, Netzer et al., 2011].
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SVHN** (measurements) — *measured_by*
  > Counting and Character Recognition: Assessing the models' ability to identify digits and count objects within images, a fundamental skill for quantitative understanding. ... including decades old benchmarks such as MNIST and SVHN [LeCun et al., 1998, Netzer et al., 2011].
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
