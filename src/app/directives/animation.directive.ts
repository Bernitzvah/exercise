import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, Renderer2 } from "@angular/core";
import { style, animate, AnimationBuilder, AnimationPlayer } from "@angular/animations";

@Directive({ selector: "[animate]" })
export class AnimationDirective implements OnInit {
    original: any;
    copy: any;
    timing= "300ms ease-in-out";
    private player: AnimationPlayer | undefined;

    @Input() set animate(value: string) {
        this.timing = "300ms ease-in-out";
    }
    @Input('animatePos0') pos0: boolean = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private builder: AnimationBuilder,
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.original = this.viewContainer.createEmbeddedView(
            this.templateRef
        ).rootNodes[0];
        setTimeout(() => {
            this.copy = this.viewContainer.createEmbeddedView(
                this.templateRef
            ).rootNodes[0];
            this.renderer.setStyle(this.original, "visibility", "hidden");
            const rect = !this.pos0 ? { top: this.original.offsetTop, left: this.original.offsetLeft } : { top: 0, left: 0 };
            this.renderer.setStyle(this.copy, "position", "absolute");
            this.renderer.setStyle(this.copy, "top", rect.top + window.scrollY + "px");
            this.renderer.setStyle(this.copy, "left", rect.left + window.scrollX + "px");
        });
    }
    animateGo() {
        setTimeout(() => {
            const rect = { top: this.original.offsetTop, left: this.original.offsetLeft }
            const myAnimation = this.builder.build([
                animate(this.timing, style({ top: rect.top + window.scrollY, left: rect.left + window.scrollX }))
            ]);
            this.player = myAnimation.create(this.copy);
            this.player.play();
        });
    }
}
